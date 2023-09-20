// components
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
// react
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
// icons
import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductsContainer() {
  const [layout, setLayout] = useState("grid");

  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  function setActiveStyles(pattern) {
    return `text btn btn-circle btn-sm ${
      pattern == layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  }
  return (
    <section className="align-elements">
      <div className="flex justify-between items-center mt-8 border-b border-based-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => {
              setLayout("grid");
            }}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => {
              setLayout("list");
            }}
          >
            <BsList />
          </button>
        </div>
      </div>
      {totalProducts == 0 ? (
        <h4 className="text-2xl mt-16">
          Sorry,no products matched your search
        </h4>
      ) : layout == "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </section>
  );
}

export default ProductsContainer;
