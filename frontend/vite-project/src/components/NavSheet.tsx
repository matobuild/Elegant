import { Link } from "react-router-dom"
import shoppingBagIcon from "../../assets/icons/outline-shopping-bag.svg"
import logo from "../../assets/logo.svg"
import BlackButton from "./BlackButton"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { accountStore } from "@/store/accountStore"
import useGetCheckoutCartList from "@/customHooks/useGetCheckoutCartList"

function NavSheet() {
  const { checkoutCart } = useGetCheckoutCartList()
  const { isLogin } = accountStore()

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
              <Link to={"/"}>
                <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                  Home
                </div>
              </Link>
              <Link to={"/shop"}>
                <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                  Shop
                </div>
              </Link>
              <Link to={"/product"}>
                <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                  Product
                </div>
              </Link>
              <Link to={"/contact-us"}>
                <div className=" border-b border-solid border-b-[##E8ECEF] pb-2 ">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col justify-between gap-4 ">
            <div className=" flex flex-col">
              <Link to="/cart">
                <div className=" button-m flex justify-between border-b border-solid border-b-[##E8ECEF] pb-2 ">
                  <div className="text-neutral-4">Cart</div>
                  <div className="flex items-center gap-[5px]">
                    <img src={shoppingBagIcon} alt="shopping-icon" />
                    <div className=" bg-neutral-7 flex h-5 w-5 items-center justify-center rounded-full ">
                      <p className=" caption-2 text-white">
                        {checkoutCart.length}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className=" button-m flex justify-between border-b border-solid border-b-[##E8ECEF] pb-2 ">
                <div className="text-neutral-4">Wishlist</div>
                <div className="flex  items-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6924 7.58373C12.3055 7.95505 11.6945 7.95505 11.3076 7.58373L10.6152 6.91927C9.80477 6.14154 8.70994 5.66667 7.5 5.66667C5.01472 5.66667 3 7.68139 3 10.1667C3 12.5493 4.28979 14.5167 6.15176 16.1332C8.01532 17.7511 10.2434 18.8241 11.5746 19.3717C11.853 19.4862 12.147 19.4862 12.4254 19.3717C13.7566 18.8241 15.9847 17.7511 17.8482 16.1332C19.7102 14.5167 21 12.5493 21 10.1667C21 7.68139 18.9853 5.66667 16.5 5.66667C15.2901 5.66667 14.1952 6.14154 13.3848 6.91927L12.6924 7.58373ZM12 5.47624C10.8321 4.35548 9.24649 3.66667 7.5 3.66667C3.91015 3.66667 1 6.57682 1 10.1667C1 16.5349 7.97034 20.0517 10.8138 21.2214C11.5796 21.5364 12.4204 21.5364 13.1862 21.2214C16.0297 20.0517 23 16.5349 23 10.1667C23 6.57682 20.0899 3.66667 16.5 3.66667C14.7535 3.66667 13.1679 4.35548 12 5.47624Z"
                      fill="#141718"
                    />
                  </svg>
                  <div className=" bg-neutral-7 flex h-5 w-5 items-center justify-center rounded-full ">
                    <p className=" caption-2 text-white">0</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {isLogin ? (
                <Link to="/account">
                  <BlackButton
                    text="Account"
                    classes="button-m bg-neutral-7 text-white hover:bg-neutral-5 w-full rounded-lg px-[26px] py-[10px]"
                  />
                </Link>
              ) : (
                <Link to="/signIn">
                  <BlackButton
                    text="Sign In"
                    classes="button-m bg-neutral-7 text-white hover:bg-neutral-5 w-full rounded-lg px-[26px] py-[10px]"
                  />
                </Link>
              )}
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
