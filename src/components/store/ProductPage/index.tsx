import { Button } from "@headlessui/react";
import NoProductPhoto from "../../../../public/product-placeholder.webp";

interface Props {
  productName: string;
  description: string;
  price: number;
  id: number;
}
const Product = ({ productName, description, price }: Props) => (
  <div className="flex justify-center">
    <div className="max-w-4xl w-full bg-white p-8 mt-6 rounded-xl shadow">
      <div className="flex mb-6">
        <div className="border">
          <img
            src={NoProductPhoto.src}
            alt="Product image"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="p-8 flex-1">
          <h1 className="text-2xl font-bold mb-3">{productName}</h1>
          <p className="text-xl font-semibold text-slate-800 mb-3">{price}</p>
          <Button className="w-full text-white font-semibold rounded-md px-3 py-2 bg-indigo-600 hover:bg-indigo-500">
            Buy
          </Button>
        </div>
      </div>
      <div className="font-medium text-slate-700">{description}</div>
    </div>
  </div>
);

export default Product;
