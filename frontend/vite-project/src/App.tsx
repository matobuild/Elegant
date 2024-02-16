import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUpPage from "./pages/signUp"

function App() {
  const router = createBrowserRouter([
    { path: "/signUp", element: <SignUpPage /> },
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
