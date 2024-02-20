type cardProps = {
  img: string
  imgAlt: string
  header: string
  text: string
}

const Card = ({ img, imgAlt, header, text }: cardProps) => {
  return (
    <div className=" bg-neutral-2 flex h-full w-full flex-col gap-4 px-8 py-12">
      <img className=" h-12 w-12" src={img} alt={imgAlt} />
      <div className="flex flex-col gap-2">
        <header className=" text-neutral-7 heading-7">{header}</header>
        <p className=" caption text-neutral-4">{text}</p>
      </div>
    </div>
  )
}

export default Card
