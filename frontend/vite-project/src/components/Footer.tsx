import instagram from "../../assets/icons/social-outline-instagram.svg"
import facebook from "../../assets/icons/social-outline-facebook.svg"
import youtube from "../../assets/icons/social-outline-youtube.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" bg-neutral-7 flex flex-col gap-[49px] px-8 py-12 md:px-40 md:pb-8 md:pt-20">
      <div className="flex flex-col gap-10 pb-2 md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row">
          <div className=" md:border-r-neutral-4 border-b-neutral-4 border-b pb-4 md:border-b-0 md:border-r md:pr-8">
            <Link to={"/"}>
              <div className=" text-neutral-1 font-poppins text-center text-[24px] font-medium not-italic leading-6 ">
                3legant
                <span className=" text-neutral-4">.</span>
              </div>
            </Link>
          </div>
          <div className=" caption-1 text-neutral-3 pt-4 text-center md:pl-8 md:pt-0 ">
            Gift & Decoration Store
          </div>
        </div>
        <div className="caption-1 text-neutral-1 flex flex-col gap-10 text-center md:flex-row">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/shop"}>Blog</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
      </div>
      <div className=" flex flex-col-reverse items-center justify-between py-4 md:flex-row">
        <div className=" flex flex-col-reverse gap-7 md:flex-row">
          <p className=" caption-2 text-neutral-3">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <div className="flex justify-center gap-7">
            <a className=" caption-2-bold text-neutral-1">Privacy Policy</a>
            <a className=" caption-2-bold text-neutral-1">Terms of Use</a>
          </div>
        </div>
        <div className="flex gap-6 pb-8">
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
