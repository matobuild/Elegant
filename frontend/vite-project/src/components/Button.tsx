type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className=" rounded-lg bg-neutral-7 w-full py-[10px] px-10 text-neutral-1 hover:bg-secondary-blue"
      type="submit"
    >
      {text}
    </button>
  )
}

export default Button
