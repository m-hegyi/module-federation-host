import NoProductPhoto from "../../../../public/product-placeholder.webp";

interface Props {
  id: string;
  title: string;
  description: string;
  price: string;
}

const Product = ({ id, title, description, price }: Props) => (
  <a
    href={`/products/${id}`}
    className="border rounded-xl max-w-80 flex flex-col justify-between group"
  >
    <div className="relative">
      <img
        src={NoProductPhoto.src}
        alt="Product image"
        className="rounded-t-xl w-full"
      />
      <div className="absolute opacity-0 w-full h-full bg-slate-200/25 top-0 transition duration-200 ease-out group-hover:opacity-100" />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <p className="font-bold text-slate-800 mb-1">{title}</p>
      <p className="text-slate-600 mb-2 text-sm flex-1">{description}</p>
      <div className="font-semibold text-lg">{price}</div>
    </div>
  </a>
);

export default Product;
