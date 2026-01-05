
export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'Cut' | 'Color' | 'Style' | 'Treatment';
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BookingData {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  notes?: string;
  negotiatedPrice?: number;
}
