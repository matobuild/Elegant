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
import { Toaster } from "@/components/ui/toaster"
import { accountStore } from "./store/accountStore"
import { useEffect } from "react"
import { TOKEN } from "./utils/constant"

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
  const { login } = accountStore()

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      login()
    }
  }, [])

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
      <Toaster />
    </>
  )
}

export default App

// todo: be able to change content display type catalog in shop page
// todo: the news letter email is saved in the data base
// todo: able to edit the account details and Address in My account page
// todo: need to change the token save location from local storage to cookies
//todo: need show message no page found, for order complete page
// todo: need to be able to edit photo in my account
// todo need to check the rules for form before submitting and make sure it is the correct type
// todo: make sure the total in the backend include the shipping fees
// todo: be able to search item
// todo: make it responsive
// todo: if user is login show the Avatar using shadcn
// add address to to the user in my account

//todo need to use interceptors on the config axios file and add token here as well.and show model error if it exist.
