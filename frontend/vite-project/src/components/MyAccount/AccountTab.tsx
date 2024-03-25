import { useForm } from "react-hook-form"
import InputBox from "../InputBox"

interface FormData {
  firstName: string
  lastName: string
  email: string
  oldPassword: string
  newPassword: string
  repeatNewPassword: string
}

const AccountDetails = () => {
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
      className=" flex flex-col gap-10 px-[72px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-6">
        <p className=" text-primary-1 body-1-semi">Account Details</p>
        <InputBox
          title={"First Name"}
          placeholder={"First name"}
          register={{
            ...register("firstName", {
              required: "*",
            }),
          }}
          errors={errors["firstName"]?.message}
        />
        <InputBox
          title={"Last Name"}
          placeholder={"Last name"}
          register={{
            ...register("lastName", {
              required: "*",
            }),
          }}
          errors={errors["lastName"]?.message}
        />
        <InputBox
          title={"email"}
          placeholder={"Email"}
          register={{
            ...register("email", {
              required: "*",
            }),
          }}
          errors={errors["email"]?.message}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className=" text-primary-1 body-1-semi">Password</p>
        <InputBox
          title={"old password"}
          placeholder={"Old password"}
          register={{
            ...register("oldPassword", {
              required: "*",
            }),
          }}
          errors={errors["oldPassword"]?.message}
        />
        <InputBox
          title={"new password"}
          placeholder={"New password"}
          register={{
            ...register("newPassword", {
              required: "*",
            }),
          }}
          errors={errors["newPassword"]?.message}
        />
        <InputBox
          title={"repeat New password"}
          placeholder={"Repeat new password"}
          register={{
            ...register("repeatNewPassword", {
              required: "*",
            }),
          }}
          errors={errors["repeatNewPassword"]?.message}
        />
        <button className="bg-neutral-7 button-s button-s w-3/12  items-center justify-center rounded-lg px-10 py-[12px] text-[#FFF]">
          Save changes
        </button>
      </div>
    </form>
  )
}

export default AccountDetails
