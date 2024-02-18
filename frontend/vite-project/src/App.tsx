import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUpPage from "./pages/signUp"
import HomePage from "./pages/Home"

function App() {
  const router = createBrowserRouter([
    { path: "/signUp", element: <SignUpPage /> },
    { path: "/", element: <HomePage /> },
  ])

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
