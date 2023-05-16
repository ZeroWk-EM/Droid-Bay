export interface IDroid {
  name: string;
  category: string;
  image: string;
  status: "New" | "Used";
  price: number;
  auction?: {
    minPrice: number;
    startAuct: Date;
    endAuct: Date;
  };
  shipping_price: number;
  seller: string;
}
