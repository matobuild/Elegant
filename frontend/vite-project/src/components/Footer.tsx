import instagram from "../../assets/icons/social-outline-instagram.svg"
import facebook from "../../assets/icons/social-outline-facebook.svg"
import youtube from "../../assets/icons/social-outline-youtube.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" bg-neutral-7 flex flex-col gap-[49px] px-40 pb-8 pt-20">
      <div className="flex justify-between pb-2">
        <div className="flex">
          <div className=" border-r-neutral-4 border-r pr-8 ">
            <Link to={"/"}>
              <div className=" text-neutral-1 font-poppins text-center text-[24px] font-medium not-italic leading-6 ">
                3legant
                <span className=" text-neutral-4">.</span>
              </div>
            </Link>
          </div>
          <div className=" caption-1 text-neutral-3 pl-8  ">
            Gift & Decoration Store
          </div>
        </div>
        <div className="caption-1 text-neutral-1 flex gap-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/shop"}>Product</Link>
          <Link to={"/shop"}>Blog</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
      </div>
      <div className=" flex justify-between py-4">
        <div className=" flex gap-7">
          <p className=" caption-2 text-neutral-3">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <a className=" caption-2-bold text-neutral-1">Privacy Policy</a>
          <a className=" caption-2-bold text-neutral-1">Terms of Use</a>
        </div>
        <div className="flex gap-6">
          <a className=" h-6 w-6" href="">
            <img src={instagram} alt="instagram-icon" />
          </a>
          <a className=" h-6 w-6" href="">
            <img src={facebook} alt="facebook-icon" />
          </a>
          <a className=" h-6 w-6" href="">
            <img src={youtube} alt="youtube-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
