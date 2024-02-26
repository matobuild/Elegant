import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUpPage from "./pages/signUp"
import HomePage from "./pages/Home"
import SignInPage from "./pages/signIn"
import ShopPage from "./pages/Shop"
import Footer from "./components/Footer"
import { NewsLetterSection } from "./components/NewsLetterSection"
import TopAlert from "./components/TopAlert"
import ProductPage from "./pages/Product"
import ContactUsPage from "./pages/ContactUs"

function App() {
  const router = createBrowserRouter([
    { path: "/signUp", element: <SignUpPage /> },
    { path: "/signIn", element: <SignInPage /> },
    { path: "/", element: <HomePage /> },
    { path: "/shop", element: <ShopPage /> },
    { path: "/product", element: <ProductPage /> },
    { path: "/contact-us", element: <ContactUsPage /> },
  ])

  //todo need to add navbar  to make it appear on all pages except singin and signup page
  return (
    <>
      <TopAlert />

      <RouterProvider router={router} />
      <NewsLetterSection />
      <Footer />
    </>
  )
}

export default App
