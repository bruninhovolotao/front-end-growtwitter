import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Feed } from "../pages/feed";
import { Login } from "../pages/login";
import { SignUp } from "../pages/sign-up";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/feed" element={<Feed />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}