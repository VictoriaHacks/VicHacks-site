import { StaticImageData } from "next/image";

export interface Stream {
  id: number;
  name: string;
  color: string;
  bgColor: string;
  shape: string;
  image: StaticImageData;
  smallImage: StaticImageData;
  description: string;
  href: string;
}
