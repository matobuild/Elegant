import { UseFormRegisterReturn } from "react-hook-form"

type InputBoxProps = {
  title: string
  placeholder: string
  register: UseFormRegisterReturn
  errors: string | undefined
}

const InputBox = ({ title, placeholder, register, errors }: InputBoxProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="hairline-2 text-neutral-4 uppercase">{title}</label>
      <div className="body-2 flex h-10 items-center rounded-md border border-solid border-[#CBCBCB] bg-[#FFF] px-4 focus-within:border-transparent">
        <input
          placeholder={placeholder}
          className="grow px-1 focus:outline-none"
          type="text"
          {...register}
        />
        {errors && <span>{errors}</span>}
      </div>
    </div>
  )
}

export default InputBox
