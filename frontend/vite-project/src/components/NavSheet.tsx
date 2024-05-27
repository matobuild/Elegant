import logo from "../../assets/logo.svg"
import BlackButton from "./BlackButton"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        {/* <!-- Hamburger Icon --> */}
        <button className="text-primary-1 focus:outline-none">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className=" w-11/12 p-6">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="button-xs text-neutral-7 flex flex-col gap-4">
              <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                Home
              </div>
              <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                Shop
              </div>
              <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                Product
              </div>
              <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                Contact Us
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-between gap-4 ">
            <div className=" flex flex-col">
              <div className=" button-m flex justify-between border-b border-solid border-b-[##E8ECEF] pb-2 ">
                <div className="text-neutral-4">Cart</div>
                <div>0</div>
              </div>
              <div className=" button-m flex justify-between border-b border-solid border-b-[##E8ECEF] pb-2 ">
                <div className="text-neutral-4">Wishlist</div>
                <div>0</div>
              </div>
            </div>
            <div>
              <BlackButton
                text="Sign In"
                classes="button-m bg-neutral-7 text-white hover:bg-neutral-5 w-full rounded-lg px-[26px] py-[10px]"
              />
            </div>
            <div className="flex gap-6">
              <a className=" h-6 w-6" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                  <circle cx="18" cy="6" r="1" fill="#141718" />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
              <a className=" h-6 w-6" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                    stroke="#141718"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a className=" h-6 w-6" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="18"
                    rx="4"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                    stroke="#141718"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavSheet
