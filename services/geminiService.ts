
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SERVICES, SALON_INFO } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "Franky", the expert stylist and manager of ${SALON_INFO.name}. 
Your goal is to help customers choose the right hair services (Braids, Wigs, Extensions) and negotiate fair prices.
Salon Name: ${SALON_INFO.name}
Slogan: ${SALON_INFO.slogan}

Salon Guidelines:
- Standard prices: ${SERVICES.map(s => `${s.name} is £${s.basePrice}`).join(', ')}.
- You specialize in African hair braiding, wig installs, and children's styles as seen in our gallery.
- You can offer a 10% discount for first-time clients.
- For repeat clients or combined services, you can be more flexible.
- Be friendly, professional, and helpful. 
- Location: ${SALON_INFO.address}.
- If a price is agreed upon, confirm the service and total price clearly.
- Keep responses concise.
`;

export class SalonChatService {
  private chat: Chat;

  constructor() {
    this.chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }

  async sendMessage(message: string) {
    return this.chat.sendMessageStream({ message });
  }
}

export const salonChat = new SalonChatService();
