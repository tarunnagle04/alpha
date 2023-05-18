import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home"

const Router = () => {
    return <>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </>
};

export default Router;
