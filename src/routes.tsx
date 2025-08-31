import { createRoutesFromElements, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";
import { ProductView } from "./pages/ProductView";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";

export const routes = createRoutesFromElements(
    <Route path="" element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductView />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Route>
)