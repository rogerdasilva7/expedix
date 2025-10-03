import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { PrivateRoute } from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    element: <Login/>,
    path: "/login"
  },
  {
    element: <Signup/>,
    path: "/signup"
  },
  {
    element: <PrivateRoute/>,
    children:[
      {
        element: <Layout/>,
        children:[
          {
            element: <Home/>,
            path: "/"
          }
        ]
      }
    ]
  }
])

export { router }