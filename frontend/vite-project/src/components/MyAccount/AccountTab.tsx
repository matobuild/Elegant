import { useForm } from "react-hook-form"
import InputBox from "../InputBox"

interface FormData {
  firstName: string
  lastName: string
  displayName: string
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
      </div>
      <div>password</div>
    </form>
  )
}

export default AccountDetails
