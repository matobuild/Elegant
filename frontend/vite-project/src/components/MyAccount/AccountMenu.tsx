import { Tab } from "@headlessui/react"
import { getImageUrl } from "../../utils/utils"

const menu = ["Account", "Address", "Orders", "Wishlist"]

const AccountMenu = () => {
  return (
    <div className=" bg-neutral-2 rounded-lg px-4 py-10 ">
      <div className=" flex flex-col gap-10">
        <div>
          <div className="flex flex-col items-center gap-[6px]">
            <div className=" h-[82px] w-[82px]">
              <div>
                <img
                  src={getImageUrl("My Account/profile.png")}
                  alt="profile-img"
                />
                {/* need to be able to edit photo */}
              </div>
            </div>
            <p className=" body-1-semi text-primary-1">Sofia Havertz</p>
          </div>
        </div>
        <Tab.List className="flex flex-col gap-3">
          {menu.map((choice) => {
            return (
              <Tab className=" outline-none">
                {({ selected }) => (
                  <p
                    className={`${
                      selected
                        ? "border-neutral-7 text-neutral-7 body-2-semi w-full self-stretch border-b border-solid py-2 text-start "
                        : "text-neutral-4 body-2-semi w-full self-stretch border-b border-solid border-transparent py-2 text-start"
                    }`}
                  >
                    {choice}
                  </p>
                )}
              </Tab>
            )
          })}

          <button className="  text-neutral-4 body-2-semi self-stretch border-b border-solid border-transparent py-2 text-start">
            Log Out
          </button>
        </Tab.List>
      </div>
    </div>
  )
}
export default AccountMenu
