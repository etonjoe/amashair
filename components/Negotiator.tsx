
import React, { useState, useRef, useEffect } from 'react';
import { salonChat } from '../services/geminiService';
import { ChatMessage } from '../types';

const Negotiator: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Alex, the LuxeLocks concierge. I can help you understand our service costs and see if we can offer any special rates for first-time visits or combined packages. What are you looking to have done today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const stream = await salonChat.sendMessage(userText);
      let modelText = '';
      
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        modelText += chunk.text;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].text = modelText;
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting to my system. Please try again or call us directly!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="py-12 bg-stone-50 h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 h-full flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-2">Price & Service Consultant</h2>
          <p className="text-stone-500 text-sm">Negotiate your custom package with Alex, our AI concierge.</p>
        </div>

        <div className="flex-1 bg-white rounded-3xl shadow-2xl border border-stone-100 flex flex-col overflow-hidden">
          <div className="bg-stone-900 p-4 text-stone-50 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-stone-900">A</div>
            <div>
              <p className="font-semibold leading-none">Alex</p>
              <p className="text-xs text-amber-500">Concierge Manager</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50/50"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-900 text-stone-50 rounded-tr-none' 
                      : 'bg-white text-stone-800 rounded-tl-none border border-stone-100'
                  }`}
                >
                  {msg.text || (isTyping && idx === messages.length - 1 ? 'Thinking...' : '')}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                placeholder="Negotiate a price for Balayage + Cut..."
                className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-stone-900 text-stone-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors disabled:opacity-50"
              >
                ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Negotiator;
