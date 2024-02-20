import Card from "./Card"
import shippingIcon from "../../../assets/icons/shipping-and-delivery-outline-fast-delivery.svg"
import CallIcon from "../../../assets/icons/communication-outline-call.svg"
const ValuesSection = () => {
  return (
    <section className=" flex content-between gap-6 px-40 py-12">
      <Card
        img={shippingIcon}
        imgAlt="shipping-icon"
        header="Free Shipping"
        text="Order above $200"
      />
      <Card
        img={shippingIcon}
        imgAlt="shipping-icon"
        header="Money-Back"
        text="30 days guarantee"
      />
      <Card
        img={shippingIcon}
        imgAlt="shipping-icon"
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
