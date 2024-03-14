type ContactUsCardProps = {
  img: string
  imgAlt: string
  title: string
  text: string
}
const ContactUsCard = ({ img, imgAlt, title, text }: ContactUsCardProps) => {
  return (
    <div className=" bg bg-neutral-2 flex w-full flex-col gap-4 px-8 py-4 ">
      <div className="flex  justify-center">
        <img className="" src={img} alt={imgAlt} />
      </div>

      <div className="flex flex-col gap-2">
        <p className=" hairline-1 text-neutral-4 text-center uppercase">
          {title}
        </p>
        <p className=" body-2-semi text-neutral-7 text-center">{text}</p>
      </div>
    </div>
  )
}

export default ContactUsCard
