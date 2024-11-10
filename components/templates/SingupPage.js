"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function SingupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // ادامه فرآیند ثبت‌نام

    if (data) {
      toast.success("ثبت نام با موفقیت انجام شد");
      router.replace("/");
    } else if (!data) {
      toast.error("ثبت نام با خطا مواجه شد");
    }
  };

  return (
    <>
      <div className="flex items-center h-[700px] justify-center w-full">
        <div className="flex lg:shadow-lg shadow-gray-300 rounded-lg p-4">
          <div className="w-[500px] h-[500px] bgsingup hidden lg:block"></div>

          <div className="w-fit h-fit">
            <h1 className="text-2xl text-center mt-5 text-blue-400 font-bold">
              ثبت نام
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 lg:gap-3 items-center lg:items-start"
            >
              <label className="mr-6 text-start w-[300px] lg:mr-0">ایمیل</label>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                {...register("email", {
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "قالب ایمیل معتبر نیست",
                  },
                })}
                className="lg:w-full w-[300px] p-2 border-[1px] outline-none rounded-lg border-gray-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <label className="mr-6 lg:mr-0 text-start w-[300px]">
                رمز عبور
              </label>
              <input
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                {...register("password", {
                  required: "رمز عبور الزامی است",
                  minLength: {
                    value: 8,
                    message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "رمز عبور باید شامل حروف و اعداد باشد",
                  },
                })}
                className="lg:w-full w-[300px] p-2 border-[1px] outline-none rounded-lg border-gray-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <label className="mr-6 lg:mr-0 text-start w-[300px]">
                تکرار رمز عبور
              </label>
              <input
                type="password"
                placeholder="تکرار رمز عبور خود را وارد کنید"
                {...register("confirmPassword", {
                  required: "تکرار رمز عبور الزامی است",
                  validate: (value) =>
                    value === watch("password") || "رمز عبور ها مطابقت ندارند",
                })}
                className="lg:w-full w-[300px] p-2 border-[1px] outline-none rounded-lg border-gray-400"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button
                type="submit"
                className="lg:w-full w-[300px] p-2 bg-blue-500 rounded-lg text-white mt-5"
              >
                ثبت نام
              </button>

              <div className="flex gap-3 text-sm mt-10 justify-center w-full">
                <p>قبلا ثبت نام کرده اید؟</p>
                <Link className="text-blue-400 font-bold" href="/login">
                  حساب کاربری
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default SingupPage;
