import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

const plans = [
  { id: 1, name: "Free shipping", price: "$0.00" },
  { id: 1, name: "Express shipping", price: "+$15.00" },
  { id: 1, name: "Pick up", price: "%21.00" },
]

function MyRadioGroup() {
  const [plan, setPlan] = useState(plans[0])

  return (
    <RadioGroup
      value={plan}
      onChange={setPlan}
      className="flex flex-col gap-3 pb-4"
    >
      {plans.map((plan) => (
        <RadioGroup.Option key={plan.id} value={plan}>
          {({ active, checked }) => (
            <div
              className={` border-neutral-7 cursor-pointer  rounded border border-solid ${active ? "bg-neutral-2" : "bg-neutral-1"}   px-4 py-[13px]`}
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {checked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="0.5"
                        width="18"
                        height="18"
                        rx="9"
                        stroke="#121212"
                        stroke-miterlimit="0"
                        stroke-linejoin="bevel"
                      />
                      <circle cx="10" cy="9.5" r="5" fill="#121212" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="0.5"
                        width="18"
                        height="18"
                        rx="9"
                        stroke="#121212"
                        stroke-miterlimit="0"
                        stroke-linejoin="bevel"
                      />
                    </svg>
                  )}
                  {plan.name}
                </div>
                <p className=" text-16px-regular">$0.00</p>
              </div>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default MyRadioGroup
