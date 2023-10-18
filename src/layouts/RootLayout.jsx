import { Outlet } from "react-router";
import { Footer } from "../components";


const RootLayout = () => {
  return (
  <>
    <main>
        <Outlet/>
    </main>
    <Footer/>
  </>
  )
}

export default RootLayout