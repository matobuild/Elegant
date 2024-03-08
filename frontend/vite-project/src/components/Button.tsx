type ButtonProps = {
  text: string
  buttonType?: "button-s" | string
  paddingX?: "px-10" | string
}

const Button = ({ buttonType, paddingX, text }: ButtonProps) => {
  return (
    <button
      className={`${buttonType} bg-neutral-7 text-neutral-1 hover:bg-neutral-5 w-full rounded-lg ${paddingX} py-[10px]`}
      type="submit"
    >
      {text}
    </button>
  )
}

export default Button
