
import { Service, GalleryImage } from './types';

export const SALON_INFO = {
  name: 'AMAS HAIR',
  slogan: 'Where style meets confidence',
  address: 'No. 3 Saville Place, SR1 1PA',
  phone: '07703779891',
  socials: {
    facebook: 'Franky Franky',
    instagram: 'Frankieshair23',
    tiktok: 'Amashair/frankieshair23'
  }
};

export const SERVICES: Service[] = [
  { id: '1', name: 'Box Braids', description: 'Classic precision-parted individual braids.', basePrice: 80, category: 'Style' },
  { id: '2', name: 'Cornrows', description: 'Intricate scalp braiding designs for adults and children.', basePrice: 45, category: 'Style' },
  { id: '3', name: 'Wig Installation', description: 'Professional lace-front or closure wig fitting and styling.', basePrice: 70, category: 'Treatment' },
  { id: '4', name: 'Wash & Blow-dry', description: 'Gentle cleaning and thermal styling.', basePrice: 35, category: 'Treatment' },
  { id: '5', name: 'Weave Sew-in', description: 'Full or partial weave installation with natural leave-out.', basePrice: 100, category: 'Style' },
  { id: '6', name: 'Kids Styling', description: 'Specialized gentle braiding and styling for children.', basePrice: 40, category: 'Style' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1649935406026-66f600f6888c?auto=format&fit=crop&q=80&w=800', title: 'Intricate Cornrow Design', category: 'Braids' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800', title: 'Sleek Bob Wig', category: 'Wigs' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1595475038784-bbe4763b9968?auto=format&fit=crop&q=80&w=800', title: 'Knotless Braids', category: 'Braids' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800', title: 'Vibrant Extensions', category: 'Color' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1617391654484-2894196c2084?auto=format&fit=crop&q=80&w=800', title: 'Kids Braided Styles', category: 'Kids' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800', title: 'Lace Install', category: 'Wigs' },
];
