import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-5">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    className="py-2 rounded-lg px-4 w-full"
                    type="email"
                    placeholder="Enter your Email :- "
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
                    className="py-2 rounded-lg px-4 w-full"
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
                <div className="flex items-center justify-between">
                  <input
                    type="submit"
                    value={"Login"}
                    className="border px-6 py-2 rounded-lg my-5 bg-pink-600 hover:bg-transparent"
                  />
                  <p>
                    Not Registered?{" "}
                    <Link to={"/signup"}>
                      <span className="text-blue-500 font-bold cursor-pointer">
                        SignUp
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
