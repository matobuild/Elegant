import { Link } from "react-router-dom"
import AboutUsSection from "../../components/AboutUsSection"
import ValuesSection from "../../components/ValueSection/ValuesSection"
import ContactUsCard from "../../components/ContactUsCard"
import HomeIcon from "../../../assets/icons/outline-store-01.svg"
import { getImageUrl } from "../../utils/utils"
import ContactUsForm from "../../components/ContactUsForm"

const ContactUsPage = () => {
  return (
    <section>
      <div className=" flex flex-col gap-12 px-8 pb-20 pt-4 md:px-40">
        <div className="flex flex-col gap-10">
          <div className=" button-xs flex items-center gap-4">
            <Link to="/">
              <button className=" flex items-center gap-1 text-[#605F5F]">
                <span>Home</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M4.58423 3L7.58423 6L4.58423 9"
                      stroke="#605F5F"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
            <Link to="/contact-us">
              <button className=" text-[#121212]">
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          <div className="w-full">
            <div className=" text-neutral-7 flex flex-col gap-6 md:w-[824px]">
              <h3 className=" md:heading-3-a heading-6">
                We believe in sustainable decor. We’re passionate about life at
                home.
              </h3>
              <p className=" body-2 ">
                Our features timeless furniture, with natural fabrics, curved
                lines, plenty of mirrors and classic design, which can be
                incorporated into any decor project. The pieces enchant for
                their sobriety, to last for generations, faithful to the shapes
                of each period, with a touch of the present
              </p>
            </div>
          </div>
        </div>
        <AboutUsSection />
        <div className=" flex flex-col gap-10">
          <h4 className=" md:heading-4-a heading-7 self-stretch text-center text-[#121212]">
            Contact Us
          </h4>
          <div className="flex flex-col gap-6 md:flex-row">
            <ContactUsCard
              title="Address"
              text="+234 Hai Trieu, Ho Chi Minh City, 
              Viet Nam"
              img={HomeIcon}
              imgAlt={"HomeIcon"}
            />
            <ContactUsCard
              title="CONTACT US"
              text="+84 234 567 890"
              img={HomeIcon}
              imgAlt={"HomeIcon"}
            />
            <ContactUsCard
              title="email"
              text="hello@3legant.com"
              img={HomeIcon}
              imgAlt={"HomeIcon"}
            />
          </div>
          <div className="flex flex-col flex-col-reverse gap-7 md:flex-row">
            <div className="w-full md:w-1/2">
              <ContactUsForm />
            </div>
            <div className="relative w-full md:w-1/2">
              <img
                className="h-[311px] w-full object-cover md:h-full"
                src={getImageUrl("ContactUs/map.png")}
                alt=""
              />
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                src={getImageUrl("ContactUs/location.svg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <ValuesSection background="bg-neutral-2" />
    </section>
  )
}

export default ContactUsPage
