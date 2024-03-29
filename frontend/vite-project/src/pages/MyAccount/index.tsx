import { Tab } from "@headlessui/react"
import AccountTab from "../../components/MyAccount/AccountTab"
import AccountMenu from "../../components/MyAccount/AccountMenu"
import AddressTab from "../../components/MyAccount/AddressTab"
import OrdersTab from "../../components/MyAccount/OrdersTab"
import WishlistTab from "../../components/MyAccount/WishlistTab"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const MyAccountPage = () => {
  const [searchParams] = useSearchParams()

  console.log("state", searchParams.get("state"))

  const [selectedIndex, setSelectedIndex] = useState<number>(
    Number(searchParams.get("state")) ?? 0,
  )

  return (
    <section className=" flex flex-col px-40 pb-20">
      <Tab.Group
        vertical
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <h3 className=" text-primary-1 heading-3 py-20 text-center">
          My Account
        </h3>
        <div className="flex gap-[7px]">
          <div className=" w-2/12">
            <AccountMenu />
          </div>

          <div className="w-10/12">
            <Tab.Panel>
              <AccountTab />
            </Tab.Panel>
            <Tab.Panel>
              <AddressTab />
            </Tab.Panel>
            <Tab.Panel>
              <OrdersTab />
            </Tab.Panel>
            <Tab.Panel>
              <WishlistTab />
            </Tab.Panel>
          </div>
        </div>
      </Tab.Group>
    </section>
  )
}

export default MyAccountPage
