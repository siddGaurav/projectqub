export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Morgan Ellis",
    role: "Founder",
    company: "Northline Studio",
    text: "QUBNIX shipped a site that feels like a product launch in itself. Motion, typography, and pacing are on another level.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Nair",
    role: "CMO",
    company: "Pulse Analytics",
    text: "The team moved fast without sacrificing craft. Our dashboard launch saw immediate praise from enterprise clients.",
    rating: 5,
  },
  {
    id: "3",
    name: "Diego Alvarez",
    role: "Creative Director",
    company: "Lumen Agency",
    text: "Rare blend of engineering and taste. They understood our brand voice and amplified it through interaction design.",
    rating: 5,
  },
];
