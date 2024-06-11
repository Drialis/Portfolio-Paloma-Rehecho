import { Routes, Route } from "react-router-dom"
import WelcomePage from "../Pages/WelcomePage/WelcomePage"
import AboutMe from "../Pages/AboutMe/AboutMe"

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={"/"} element={<WelcomePage />} />
                <Route path={"/about-me"} element={<AboutMe />} />
                {/* <Route path={"/custom-map"} element={<CustomMap />} />


                <Route path={"/*"} element={<NotFoundPage />} /> */}

            </Routes>
        </div>
    )
}

export default AppRoutes