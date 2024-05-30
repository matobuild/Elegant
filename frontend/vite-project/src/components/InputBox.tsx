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
      <div className="md:body-2-a caption-1 flex h-10 items-center rounded-md border border-solid border-[#CBCBCB] bg-[#FFF] px-1 focus-within:border-transparent md:px-4">
        <input
          placeholder={placeholder}
          className="w-0 grow px-1 focus:outline-none "
          type="text"
          {...register}
        />
        {errors && <span>{errors}</span>}
      </div>
    </div>
  )
}

export default InputBox
