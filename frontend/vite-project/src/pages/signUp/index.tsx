import { SubmitHandler, useForm } from "react-hook-form"
import { getImageUrl } from "../../utils/utils"
import logo from "../../../assets/logo.svg"
import BlackButton from "../../components/BlackButton"
import { SignService } from "../../services/SignService"
import { Link, useNavigate } from "react-router-dom"
import { accountStore } from "@/store/accountStore"

interface FormData {
  name: string
  username: string
  email: string
  password: string
  checkbox: boolean
}

const SignUpPage = () => {
  const navigate = useNavigate()
  const { login } = accountStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function postSignUp(input: object) {
    const data = await SignService.postSignUp(input)
    if (data.status == 200) {
      const token = data.data?.token
      if (!token) {
        return
      }
      localStorage.setItem("token", token)
      login()
      navigate("/")
    } else {
      console.log("CANNOT sing up ")
    }
  }

  const onSubmit: SubmitHandler<FormData> = (signUpData) => {
    postSignUp(signUpData)
  }

  return (
    <div>
      <div className="sm:flex">
        <div className="sm:w-1/2 ">
          <div className="relative ">
            <img
              className="h-auto w-full object-cover sm:h-screen"
              src={getImageUrl("signUp&In/SignUp Image Placeholder.png")}
              alt="Placeholder"
            />
            <div className="absolute left-0 right-0 top-8 flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center sm:w-1/2 ">
          <div className="flex flex-col gap-8 rounded-b-lg px-9 py-10 sm:w-[456px] sm:shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <div className=" heading-4 text-neutral-7 text-with-shadow">
                Sign up
              </div>
              <p className="body-2 text-neutral-4 self-stretch">
                Already have an account?{" "}
                <span className=" body-2-semi text-secondary-green hover:text-secondary-blue">
                  <Link to="/signIn">Sign in</Link>
                </span>
              </p>
            </div>

            <form
              className="text-neutral-4 flex flex-col items-start gap-8 self-stretch"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className=" border-neutral-3 w-full border-b pb-[14px]">
                <div className="flex gap-2">
                  <label>Your Name</label>
                  <input
                    className="grow px-1"
                    type="text"
                    {...register("name", {
                      required: "*",
                    })}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>

              <div className=" border-neutral-3 w-full border-b pb-[14px]">
                <div className="flex gap-2">
                  <label>Username</label>
                  <input
                    className="grow px-1"
                    type="text"
                    {...register("username", {
                      required: "*",
                    })}
                  />
                  {errors.username && <span>{errors.username.message}</span>}
                </div>
              </div>

              <div className=" border-neutral-3 w-full border-b pb-[14px]">
                <div className="flex gap-2">
                  <label>Email address</label>
                  <input
                    className="grow px-1"
                    type="email"
                    {...register("email", {
                      required: "*",
                    })}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </div>

              <div className=" border-neutral-3 w-full border-b pb-[14px]">
                <div className="flex gap-2">
                  <label>Password</label>
                  <input
                    className="grow px-1"
                    type="password"
                    {...register("password", {
                      required: "*",
                    })}
                  />
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
              </div>

              <div className="w-full">
                <div className="flex gap-x-3">
                  <input
                    className=" che h-6 w-6 rounded border-[1.5px] fill-[#FCFCFD]"
                    type="checkbox"
                    {...register("checkbox", {
                      required: " *",
                    })}
                  />
                  <label className="text-neutral-4 body-2 ">
                    I agree with{" "}
                    <span className=" body-2-semi text-neutral-7">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className=" body-2-semi text-neutral-7">
                      Terms of Use
                    </span>
                    {errors.checkbox && <span>{errors.checkbox.message}</span>}
                  </label>
                </div>
              </div>
              <BlackButton
                text="Sign Up"
                classes="button-s bg-neutral-7 text-neutral-1 hover:bg-neutral-5 w-full rounded-lg px-10 py-[10px]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
