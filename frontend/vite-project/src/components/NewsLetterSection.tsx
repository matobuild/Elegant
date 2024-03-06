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
        <div className=" border-neutral-4 button-s flex gap-2 border-b border-solid py-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.07663 6.53123C4.23287 6.01907 4.70913 5.64648 5.27242 5.64648H19.2724C19.8357 5.64648 20.312 6.01907 20.4682 6.53123L12.2724 11.9951L4.07663 6.53123ZM2.52245 6.88275C2.52231 6.89075 2.5223 6.89875 2.52242 6.90674V16.8965C2.52242 18.4153 3.75364 19.6465 5.27242 19.6465H19.2724C20.7912 19.6465 22.0224 18.4153 22.0224 16.8965V6.90671M20.5224 8.29787V16.8965C20.5224 17.5868 19.9628 18.1465 19.2724 18.1465H5.27242C4.58206 18.1465 4.02242 17.5868 4.02242 16.8965V8.29787L11.8564 13.5205C12.1083 13.6885 12.4365 13.6885 12.6884 13.5205L20.5224 8.29787ZM22.0224 6.88278C22.015 5.3703 20.7866 4.14648 19.2724 4.14648H5.27242C3.75822 4.14648 2.52985 5.37028 2.52245 6.88275"
              fill="#141718"
            />
          </svg>
          <input
            className=" flex-basis-0  text-neutral-4 placeholder-neutral-4 flex-shrink-0 flex-grow bg-transparent"
            type="email"
            placeholder="Email address"
          ></input>
          <button className="text-neutral-4  hover:text-neutral-6 ">
            Signup
          </button>
        </div>
      </div>
    </section>
  )
}
