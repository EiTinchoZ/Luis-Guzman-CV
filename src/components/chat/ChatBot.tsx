'use client';

import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, Send, User, X } from 'lucide-react';
import { useLanguage } from '@/i18n';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function ChatBot() {
  const { language, t, tArray } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => tArray('chat.suggestedQuestions'), [language, tArray]);

  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: t('chat.welcome'),
      },
    ]);
  }, [language, t]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isLoading, messages]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          messages: nextMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(t('chat.error'));
      }

      const assistantId = `assistant-${Date.now()}`;
      setMessages((current) => [
        ...current,
        { id: assistantId, role: 'assistant', content: '' },
      ]);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aggregated = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          aggregated += decoder.decode(value, { stream: true });
          setMessages((current) =>
            current.map((message) =>
              message.id === assistantId
                ? { ...message, content: aggregated }
                : message
            )
          );
        }
      }
    } catch (error) {
      const fallback =
        error instanceof Error && error.message ? error.message : t('chat.error');
      setMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: 'assistant',
          content: fallback,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-[0_16px_60px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        data-chat-widget
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[560px] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/85 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/8 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t('chat.title')}</p>
                  <p className="text-xs text-white/45">{t('chat.subtitle')}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                      message.role === 'user'
                        ? 'bg-white/8 text-white/60'
                        : 'bg-primary/12 text-primary'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="h-3.5 w-3.5" />
                    ) : (
                      <Bot className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/6 text-white/78'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="rounded-3xl bg-white/6 px-4 py-3 text-sm text-white/55">
                    {t('chat.thinking')}
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {messages.length === 1 && suggestions.length > 0 && (
              <div className="border-t border-white/8 px-4 py-3">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-white/30">
                  {t('chat.suggestedLabel')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => setInput(question)}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="border-t border-white/8 p-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-2 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/25 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
