type ButtonProps = {
  text: string
  classes: string
}

const BlackButton = ({ classes, text }: ButtonProps) => {
  return (
    <button className={classes} type="submit">
      {text}
    </button>
  )
}

export default BlackButton
