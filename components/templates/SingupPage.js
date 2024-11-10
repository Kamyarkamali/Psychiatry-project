"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // Continue the registration process

    if (data) {
      toast.success("Signup successful");
      router.replace("/");
    } else {
      toast.error("Signup failed");
    }
  };

  return (
    <>
      <div className="flex items-center h-[700px] justify-center w-full">
        <div className="flex lg:shadow-lg shadow-gray-300 rounded-lg p-4">
          <div className="w-[500px] h-[500px] bgsingup hidden lg:block"></div>

          <div className="w-fit h-fit">
            <h1 className="text-2xl text-center mt-5 text-blue-400 font-bold">
              Signup
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 lg:gap-3 items-center lg:items-start text-left"
            >
              <label className="ml-6 text-end w-[300px] lg:ml-0">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className="lg:w-full w-[300px] p-2 border-[1px] outline-none rounded-lg border-gray-400 text-left"
              />
              {errors.email && (
                <p className="text-red-500 text-sm text-left">
                  {errors.email.message}
                </p>
              )}

              <label className="ml-6 lg:ml-0 text-end w-[300px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Password must include letters and numbers",
                  },
                })}
                className="lg:w-full w-[300px] p-2 border-[1px] outline-none rounded-lg border-gray-400 text-left"
              />
              {errors.password && (
                <p className="text-red-500 text-sm text-left">
                  {errors.password.message}
                </p>
              )}

              <label className="ml-6 lg:ml-0 text-end w-[300px]">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="lg:w-full w-[300px] p-2 border-[1px] outline-none rounded-lg border-gray-400 text-left"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm text-left">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button
                type="submit"
                className="lg:w-full w-[300px] p-2 bg-blue-500 rounded-lg text-white mt-5"
              >
                Signup
              </button>

              <div className="flex gap-3 text-sm mt-10 justify-center w-full text-left">
                <Link className="text-blue-400 font-bold" href="/login">
                  Login
                </Link>
                <p>?Already have an account</p>
              </div>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default SignupPage;
