import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Categories from "../components/organisms/categories";
import AboutCats from "../components/organisms/aboutCats";

const CatsRoutes = () => (
        <Router>
            <div className={"main"}>
                <Categories/>
                <Routes>
                    <Route index={false} path={"/:id"} element={<AboutCats/>}/>
                </Routes>
            </div>
        </Router>
)

export default CatsRoutes