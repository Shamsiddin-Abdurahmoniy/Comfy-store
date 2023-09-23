import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import FormRange from "./FormRange";
function Filters() {
  const { meta, products, params } = useLoaderData(useLoaderData);
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="align-elements bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
      />
      {/* CATEGORY */}
      <FormSelect
        label="Select Category"
        name="category"
        defaultValue={category}
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANY */}
      <FormSelect
        label="Select Company"
        name="company"
        defaultValue={company}
        list={meta.companies}
        size="select-sm"
      />
      {/* SORT BY */}
      <FormSelect
        label="Sort By"
        name="order"
        defaultValue={order}
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      {/* PRICE RANGE */}
      <FormRange
        label="Select Price"
        name="price"
        price="100000"
        size="range-sm"
      />
      {/* CHECKBOX */}
      <FormCheckbox
        label="Free Shiping"
        name="shiping"
        defaultValue="on"
        size="checkbox-sm"
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filters;
