import { SubmitHandler, useForm } from "react-hook-form"
import InputBox from "./InputBox"

interface FormData {
  name: string
  email: string
  message: string
}

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <form
      className="flex h-full flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputBox
        title={"FULL NAME"}
        placeholder={"Your Name"}
        register={{
          ...register("name", {
            required: "*",
          }),
        }}
        errors={errors["name"]?.message}
      />
      <InputBox
        title={"Email address"}
        placeholder={"Your Email"}
        register={{
          ...register("email", {
            required: "*",
          }),
        }}
        errors={errors["email"]?.message}
      />
      <div className="flex flex-grow flex-col gap-3">
        <label className=" hairline-2 text-neutral-4 uppercase ">Message</label>
        <div className=" body-2 flex h-10 flex-grow items-center rounded-md border border-solid border-[#CBCBCB] bg-[#FFF] px-4 py-4 focus-within:border-transparent">
          <textarea
            placeholder="Your message"
            className="h-full w-full grow px-1 focus:outline-none"
            {...register("message", {
              required: "*",
            })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
      </div>
      <button className=" bg-neutral-7 button-s button-s w-1/3 items-center justify-center rounded-lg px-10 py-[6px] text-[#FFF]">
        Send Message
      </button>
    </form>
  )
}

export default ContactUsForm
