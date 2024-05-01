import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import searchIcon from "../../assets/icons/search.svg"
import userIcon from "../../assets/icons/outline-user-circle.svg"
import shoppingBagIcon from "../../assets/icons/outline-shopping-bag.svg"
import useGetCheckoutCartList from "../customHooks/useGetCheckoutCartList"
import { accountStore } from "@/store/accountStore"

const NavBar = () => {
  const { checkoutCart } = useGetCheckoutCartList()
  const { isLogin } = accountStore()

  return (
    <nav className=" flex justify-between px-40 py-4 ">
      <div className="flex gap-1 md:hidden">
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
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <NavLink className="hidden md:inline-block" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="button-xs text-neutral-4 hidden gap-10 md:flex">
        <NavLink
          className={({ isActive }) => (isActive ? "text-neutral-7" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-neutral-7" : "")}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-neutral-7" : "")}
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-neutral-7" : "")}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="flex gap-4">
        <img className="hidden" src={searchIcon} alt="search-icon" />
        {isLogin ? (
          <Link to="/account">
            <img src={userIcon} alt="user-icon" />
          </Link>
        ) : (
          <Link className="hidden md:inline-block" to="/signIn">
            <img src={userIcon} alt="login-icon" />
          </Link>
        )}

        <Link to="/cart">
          <div className="g-[5px] flex items-center">
            <img src={shoppingBagIcon} alt="shopping-icon" />
            <div className=" bg-neutral-7 flex h-5 w-5 items-center justify-center rounded-full ">
              <p className=" text-white">{checkoutCart.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
