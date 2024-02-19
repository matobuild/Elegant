const SliderSection = () => {
  return (
    <div className=" px-40 pb-10">
      <div className="flex flex-col gap-8 ">
        <img src="../../assets/Home/header-image.png" alt="Header-Image" />
        <div className="flex justify-between">
          <div className="text-neutral-7 heading-2">
            <h1>
              Simply Unique <span className="text-neutral-4">/</span>
            </h1>
            <h1>
              Simply Better<span className="text-neutral-4">.</span>
            </h1>
          </div>

          <div className="text-bottom flex w-[424px] items-center justify-center">
            <p className="body-2-semi text-neutral-5">
              3legant{" "}
              <span className="body-2 text-neutral-4">
                is a gift & decorations store based in HCMC, Vietnam. Est since
                2019.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection
