import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Feed } from "../pages/feed";
import { Login } from "../pages/login";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}