import Card from "./Card"
import shippingIcon from "../../../assets/icons/shipping-and-delivery-outline-fast-delivery.svg"
import CallIcon from "../../../assets/icons/communication-outline-call.svg"
import MoneyBack from "../../../assets/icons/finance-and-payment-outline-money.svg"
import SecurePayment from "../../../assets/icons/interface-outline-lock-01.svg"

type ValuesSectionProps = {
  background?: string
}
const ValuesSection = ({ background }: ValuesSectionProps) => {
  return (
    <section
      className={`grid grid-cols-2 gap-2 gap-y-6 p-8 md:flex md:content-between md:gap-6 md:px-40 md:py-12 ${background}`}
    >
      <Card
        img={shippingIcon}
        imgAlt="shipping-icon"
        header="Free Shipping"
        text="Order above $200"
      />
      <Card
        img={MoneyBack}
        imgAlt="Money-back-icon"
        header="Money-Back"
        text="30 days guarantee"
      />
      <Card
        img={SecurePayment}
        imgAlt="SecurePayment-icon"
        header="Secure Payments"
        text="Secured by Stripe"
      />
      <Card
        img={CallIcon}
        imgAlt="call-icon"
        header="24/7 Support"
        text="Phone and Email Support"
      />
    </section>
  )
}

export default ValuesSection
