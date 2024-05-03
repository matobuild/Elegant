const SliderSection = () => {
  return (
    <section className=" px-8 pb-10 md:px-40 md:pb-10">
      <div className="flex flex-col gap-8 ">
        <img src="../../assets/Home/header-image.png" alt="Header-Image" />
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="text-neutral-7 md:heading-2-a heading-4">
            <h1>
              Simply Unique <span className="text-neutral-4">/</span>
            </h1>
            <h1>
              Simply Better<span className="text-neutral-4">.</span>
            </h1>
          </div>

          <div className="md:text-bottom caption-1 flex items-center justify-center md:w-[424px]">
            <p className="md:body-2-semi-a text-neutral-5">
              3legant{" "}
              <span className="md:body-2-a text-neutral-4">
                is a gift & decorations store based in HCMC, Vietnam. Est since
                2019.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderSection
