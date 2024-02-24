import { getImageUrl } from "../utils/utils"

export const NewsLetterSection = () => {
  return (
    <section className="relative">
      <img
        className="w-screen"
        src={getImageUrl("Home/newsletter-bg.png")}
        alt="newsletter-bg"
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-8">
        <div className="text-neutral-7 flex flex-col items-center gap-2">
          <h4 className="heading-4 ">Join Our Newsletter</h4>
          <p className="text-18px-regular">
            Sign up for deals, new products and promotions
          </p>
        </div>
        <div>EMAIL NEED TO FIX THIS FORM!!!</div>
      </div>
    </section>
  )
}
