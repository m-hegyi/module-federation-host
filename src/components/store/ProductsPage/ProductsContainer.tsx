import Product from "./Product";
import productsMock from "../../../assets/products.json";

const ProductsContainer = () => (
  <div className="bg-white w-full m-6 rounded-2xl border p-6 max-w-6xl">
    <div className="grid grid-cols-3 gap-8">
      {productsMock.map((product) => (
        <Product
          key={product.id}
          id={product.id.toString()}
          title={product.productName}
          description={product.description}
          price={product.price.toString()}
        />
      ))}
    </div>
  </div>
);

export default ProductsContainer;
