import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home, About, Error} from "./pages"
import RootLayout from './layouts/RootLayout'
import './App.css'
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {


 return <RouterProvider router={router} />;
 
}

export default App
