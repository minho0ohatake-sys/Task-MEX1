export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  price: number;
  rating: number;
};