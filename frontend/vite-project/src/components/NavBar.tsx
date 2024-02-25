import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import searchIcon from "../../assets/icons/search.svg"
import userIcon from "../../assets/icons/outline-user-circle.svg"
import shoppingBagIcon from "../../assets/icons/outline-shopping-bag.svg"

const NavBar = () => {
  return (
    <nav className=" flex justify-between px-40 py-4">
      <img src={logo} alt="logo" />
      <div className="button-xs text-neutral-4 flex gap-10 ">
        <Link className="text-neutral-7" to="/">
          Home
        </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="flex gap-4">
        <img src={searchIcon} alt="search-icon" />
        <img src={userIcon} alt="user-icon" />
        <div className="g-[5px] flex items-center">
          <img src={shoppingBagIcon} alt="shopping-icon" />
          <div className=" bg-neutral-7 flex h-5 w-5 items-center justify-center rounded-full ">
            <p className=" text-white">2</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
