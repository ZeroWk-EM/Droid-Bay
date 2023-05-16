export interface Selling {
  name: string;
  category: string;
  image: string;
  status: string;
  price: number;
  auction?: Auction;
  shipping_price: number;
  seller: string;
}

export interface Auction {
  minPrice: number;
  startAuct: Date;
  endAuct: Date;
}
