import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";

function TheRoutes(){
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
         <Route path="*" element={<h1>Nothing Here..</h1>} />
    </Routes>
)

}

export default TheRoutes