// components
import Filters from "../components/Filters";
import { PaginationsContainer, ProductsContainer } from "../components";
// utils
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(meta);
  return { products, meta };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationsContainer />
    </>
  );
}

export default Products;
