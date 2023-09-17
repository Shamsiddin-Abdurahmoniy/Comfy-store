// components
import { Hero, FeaturedProducts } from "../components";
// utils
import { customFetch } from "../utils";
const url = "/products?featured=true";
export const loader = async () => {
  const request = await customFetch(url);
  let products = request.data.data;
  return { products };
};

function Landing() {
  return (
    <section className="align-elements py-20">
      <Hero />
      <FeaturedProducts />
    </section>
  );
}

export default Landing;
