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
        <RadioGroup.Option
          key={plan.id}
          value={plan}
          className=" border-neutral-7 bg-neutral-1 rounded border border-solid px-4 py-[13px]"
        >
          <div className="flex justify-between">
            <div> {plan.name}</div>
            <p className=" text-16px-regular">$0.00</p>
          </div>
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default MyRadioGroup
