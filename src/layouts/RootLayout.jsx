import { Outlet } from "react-router";
import { Footer } from "../components";

import React from 'react'

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