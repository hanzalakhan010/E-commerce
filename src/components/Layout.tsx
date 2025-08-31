import { Outlet } from "react-router"
import { Nav } from "./NavBar"
import { Footer } from "./Footer"

export const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}