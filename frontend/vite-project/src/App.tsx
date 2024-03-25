import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUpPage from "./pages/signUp"
import HomePage from "./pages/Home"
import SignInPage from "./pages/signIn"
import ShopPage from "./pages/Shop"
import Footer from "./components/Footer"
import { NewsLetterSection } from "./components/NewsLetterSection"
import TopAlert from "./components/TopAlert"
import ProductPage from "./pages/Product"
import ContactUsPage from "./pages/ContactUs"
import NavBar from "./components/NavBar"
import DetailPage from "./pages/Details"
import CartPage from "./pages/Cart"
import CheckOutPage from "./pages/CheckOut"
import OrderCompletePage from "./pages/OrderComplete"
import MyAccountPage from "./pages/MyAccount"

const AppLayout = () => (
  <>
    <TopAlert />
    <NavBar />
    <Outlet />
    <NewsLetterSection />
    <Footer />
  </>
)

const AppLayoutWithOutNavBar = () => (
  <>
    <Outlet />
  </>
)

const AppLayoutForCheckout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
)

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/shop", element: <ShopPage /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/product/:name", element: <DetailPage /> },
      ],
    },
    {
      element: <AppLayoutWithOutNavBar />,
      children: [
        { path: "/signUp", element: <SignUpPage /> },
        { path: "/signIn", element: <SignInPage /> },
      ],
    },
    {
      element: <AppLayoutForCheckout />,
      children: [
        { path: "/cart", element: <CartPage /> },
        { path: "/checkout", element: <CheckOutPage /> },
        { path: "/orderComplete", element: <OrderCompletePage /> },
        { path: "/contact-us", element: <ContactUsPage /> },
        { path: "/account", element: <MyAccountPage /> },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

// todo: add to be able to click on the Living room tab and go to shop page with the living room category selected products, the same goes for the detail page
// todo: when shop page is open it should scroll to the top of the page
// todo: be able to change content display catalog in shop page
// todo: the news letter email is saved in the data base
// todo: need to fix the add to cart button from going to the detail page
// todo: need to be able to show the status if user is login or sign up fail, and any error message from back end and it should pop up on the screen
// todo: need to change the token save location from local storage to cookies
// todo: what is bearer token with JWT, did i implement it correctly ? / should use interceptor
//todo: need show message no page found, for order complete page
// todo: need to be able to edit photo in my account
//todo need to use interceptors on the config axios file and add token here as well.and show model error if it exist.
// todo need to check the rules for form before submitting and make sure it is the correct type

// how to deal with the payment method ?? in backend it should be save in orders_payment ?
// in checkoutForm on line 197 typescript error?
// is it ok to use router.route("/checkout").post(verifyToken, checkout) to delete the carts when call the API?
// need to fix the shipping method and add it to the total in the backend
// how to click purchase history and go to the account page with order history tabs ?
