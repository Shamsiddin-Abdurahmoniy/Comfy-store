// react
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
// utils
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
// loader by react
export let loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};
function SingleProduct() {
  let { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  // useState
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  // price
  const dollarAmount = formatPrice(price);
  // function for select
  function handleAmount(e) {
    setAmount(e.target.value);
  }
  return (
    <section className="align-elements py-20">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid mt-6 pay-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    onClick={() => {
                      setProductColor(color);
                    }}
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color == productColor && "border-2 border-secondary"
                    }`}
                    style={{ background: color }}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Amount
              </h4>
            </label>
            <select
              onChange={handleAmount}
              value={amount}
              className="select select-secondary select-bordered select-md"
              id="amount"
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
