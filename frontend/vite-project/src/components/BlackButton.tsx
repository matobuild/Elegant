type ButtonProps = {
  text: string
  classes: string
  clicking?: () => void
}

const BlackButton = ({ classes, text, clicking }: ButtonProps) => {
  return (
    <button className={classes} type="submit" onClick={clicking ?? (() => {})}>
      {text}
    </button>
  )
}

export default BlackButton
