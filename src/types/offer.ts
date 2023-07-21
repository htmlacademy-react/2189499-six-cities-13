export type Offer = {
  id: number,
  image: string;
  header: string;
  description: string;
  premium: boolean;
  type: "apartment" | "room" | "house" | "hotel";
  rating: number;
  roomCount: number;
  guestMax: number;
  price: number;
  homeOwner: string;
}