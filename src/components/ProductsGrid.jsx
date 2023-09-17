// react
import { useLoaderData, Link } from "react-router-dom";
// utils
import { formatPrice } from "../utils";
function ProductsGrid() {
  const { products } = useLoaderData();
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        // console.log(product);
        const { image, price, title } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary font-medium">{dollarAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
