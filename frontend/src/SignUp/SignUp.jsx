import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "../components/Login";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div id="" className="border p-12 rounded-md shadow-pink-500 md:w-3/5">
          <div className="">
            <form method="">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Sign Up!</h3>
            <div className="mt-5">
              <form
                className="md:w-full"
                action=""
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="md:w-full">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    className="py-2 rounded-lg px-10 md:w-full"
                    type="name"
                    placeholder="Enter your Name :- "
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="font-bold text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 w-full">
                  <label htmlFor="password">Email</label>
                  <br />
                  <input
                    className="py-2 rounded-lg px-10 md:w-full"
                    type="email"
                    placeholder="Enter your email :- "
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="font-bold text-red-600">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                    id="password"
                    className="py-2 rounded-lg px-10 md:w-full"
                    type="password"
                    placeholder="Enter your password :- "
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="font-bold text-red-600">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="">
                  <input
                    type="submit"
                    value={"SignUp"}
                    className="border px-6 py-2 rounded-lg my-5 bg-pink-600 hover:bg-transparent"
                  />
                  <p>
                    Have account?{" "}
                    <span
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="text-blue-500 font-bold cursor-pointer"
                    >
                      Login
                    </span>
                    <Login />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
