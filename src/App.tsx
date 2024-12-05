import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { About } from "./pages/About"
import { Box } from "@radix-ui/themes"

export default function App() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>

  )
}