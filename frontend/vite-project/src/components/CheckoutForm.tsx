import { SubmitHandler, useForm } from "react-hook-form"
import InputBox from "./InputBox"
import MyRadioGroup from "./MyRadioGroup"
import { useState } from "react"
import { CheckoutService } from "../services/CheckoutService"
import { checkoutCartStore } from "../store/checkoutCartStore"
import { useNavigate } from "react-router-dom"

const plans = [
  {
    id: 1,
    name: "Pay by Card Credit",
    price: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="4"
          stroke="#141718"
          strokeWidth="1.5"
        />
        <circle
          cx="2"
          cy="2"
          r="2"
          transform="matrix(1 0 0 -1 10 14)"
          stroke="#141718"
          strokeWidth="1.5"
        />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(1 0 0 -1 17 13)"
          fill="#141718"
        />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(1 0 0 -1 5 13)"
          fill="#141718"
        />
      </svg>
    ),
  },
  { id: 2, name: "Paypal", price: "" },
]

export interface FormData {
  firstName: string
  lastName: string
  phone: number
  email: string
  streetAddress: string
  country: string
  city: string
  state: string
  zip: number
  cardNumber: number
  expiryDate: string
  cvc: number
  shipping_method: string
}
const CheckoutForm = () => {
  const navigate = useNavigate()
  const { cartSummary, updateCheckoutCart, updateCartSummary } =
    checkoutCartStore()

  const [plan, setPlan] = useState(plans[0])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // hit for API
    data.shipping_method = cartSummary.plan.name
    console.log(data)

    const checkout = await CheckoutService.postCheckout(data)

    if (checkout.status === 200) {
      // clear out the store and make sure it's empty
      updateCheckoutCart([])
      updateCartSummary({
        subtotal: 0,
        total: 0,
        plan: { id: NaN, name: "", price: "$0.00", amount: NaN },
      })

      // go to next page
      navigate("/orderComplete")
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className=" border-neutral-4 flex flex-col gap-6 rounded border border-solid px-6 py-10">
        <h1 className=" heading-7 text-primary-1">Contact Information</h1>
        <div className="flex gap-6">
          <div className=" w-1/2">
            <InputBox
              title={"First Name"}
              placeholder={"First name"}
              register={{
                ...register("firstName", {
                  required: "*",
                }),
              }}
              errors={errors["firstName"]?.message}
            />
          </div>
          <div className=" w-1/2">
            <InputBox
              title={"Last Name"}
              placeholder={"Last name"}
              register={{
                ...register("lastName", {
                  required: "*",
                }),
              }}
              errors={errors["firstName"]?.message}
            />
          </div>
        </div>
        <InputBox
          title={"Phone number"}
          placeholder={"Phone number"}
          register={{
            ...register("phone", {
              required: "*",
            }),
          }}
          errors={errors["phone"]?.message}
        />
        <InputBox
          title={"email address"}
          placeholder={"Your email"}
          register={{
            ...register("email", {
              required: "*",
            }),
          }}
          errors={errors["email"]?.message}
        />
      </div>
      <div className=" border-neutral-4 flex flex-col gap-6 rounded border border-solid px-6 py-10">
        <h1 className=" heading-7 text-primary-1">Shipping Address</h1>
        <InputBox
          title={"Street Address"}
          placeholder={"Street Address"}
          register={{
            ...register("streetAddress", {
              required: "*",
            }),
          }}
          errors={errors["streetAddress"]?.message}
        />

        <InputBox
          title={"Country"}
          placeholder={"Country"}
          register={{
            ...register("country", {
              required: "*",
            }),
          }}
          errors={errors["country"]?.message}
        />
        <InputBox
          title={"Town / City"}
          placeholder={"Town / City"}
          register={{
            ...register("city", {
              required: "*",
            }),
          }}
          errors={errors["city"]?.message}
        />
        <div className="flex gap-6">
          <div className=" w-1/2">
            <InputBox
              title={"State"}
              placeholder={"State"}
              register={{
                ...register("state", {
                  required: "*",
                }),
              }}
              errors={errors["state"]?.message}
            />
          </div>
          <div className=" w-1/2">
            <InputBox
              title={"Zip Code"}
              placeholder={"Zip Code"}
              register={{
                ...register("zip", {
                  required: "*",
                }),
              }}
              errors={errors["zip"]?.message}
            />
          </div>
        </div>
      </div>
      <div className=" border-neutral-4 flex flex-col gap-6 rounded border border-solid px-6 py-10">
        <h1 className=" heading-7 text-primary-1">Payment method</h1>
        <MyRadioGroup plan={plan} setPlan={setPlan} plans={plans} />
        <InputBox
          title={"Card Number"}
          placeholder={"1234 1234 1234"}
          register={{
            ...register("cardNumber", {
              required: "*",
            }),
          }}
          errors={errors["cardNumber"]?.message}
        />

        <div className="flex gap-6">
          <div className=" w-1/2">
            <InputBox
              title={"Expiration Date"}
              placeholder={"MM/YY"}
              register={{
                ...register("expiryDate", {
                  required: "*",
                }),
              }}
              errors={errors["expiryDate"]?.message}
            />
          </div>
          <div className=" w-1/2">
            <InputBox
              title={"cvc"}
              placeholder={"CVC Code"}
              register={{
                ...register("cvc", {
                  required: "*",
                }),
              }}
              errors={errors["cvc"]?.message}
            />
          </div>
        </div>
      </div>
      <button className=" bg-neutral-7 button-s button-s  items-center justify-center rounded-lg px-10 py-[12px] text-[#FFF]">
        Place Order
      </button>
    </form>
  )
}

export default CheckoutForm
