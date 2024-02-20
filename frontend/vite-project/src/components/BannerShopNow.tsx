type BannerShopNowProps = {
  productType: string
}

const BannerShopNow = ({ productType }: BannerShopNowProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="heading-5 text-neutral-7 self-stretch">{productType}</h5>
      <div>
        <button className="button-s text-neutral-7 border-b-neutral-7 hover:border-neutral-4 hover:text-neutral-4 border-b border-solid">
          <div className="flex items-center gap-1">
            Shop Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/arrow-right">
                <path
                  id="Vector"
                  d="M4.16666 10H15.8333"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M10.8333 15L15.8333 10"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M10.8333 5L15.8333 10"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default BannerShopNow
