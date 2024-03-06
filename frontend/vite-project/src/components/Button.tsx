type ButtonProps = {
  text: string
  buttonType?: "button-s" | string
}

const Button = ({ buttonType, text }: ButtonProps) => {
  return (
    <button
      className={`${buttonType} bg-neutral-7 text-neutral-1 hover:bg-neutral-5 w-full rounded-lg px-10 py-[10px]`}
      type="submit"
    >
      {text}
    </button>
  )
}

export default Button
