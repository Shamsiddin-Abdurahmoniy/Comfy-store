// react
import { Form, Link } from "react-router-dom";
// components
import { FormInput, SubmitBtn } from "../components";

function Login() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="Email" name="identifer" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <Link to="/" type="button" class="btn btn-secondary btn-block">
          guest user
        </Link>
        <p class="text-center">
          Not a member yet?
          <Link
            class="ml-2 link link-hover link-primary capitalize"
            to="/register"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
