import './App.css'
import Nav from "./component/Nav.tsx";
import Home from "./component/Home.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import styled from "styled-components";
import Education from "./component/Education.tsx";
import Skills from "./component/Skills.tsx";
import Projects from "./component/Projects.tsx";
import Interests from "./component/Interests.tsx";
import Contact from "./component/Contact.tsx";
import Footer from "./component/Footer.tsx";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 15mm;
    display: flex;
    justify-content: space-around;
    background-color: #000000;
    border-bottom: 1px solid #444444;
`;

const Main = styled.main`
    margin-top: 20mm;
    margin-bottom: 5mm;
    padding: 5mm;
    box-sizing: border-box;
    height: 100%;
    width: 25cm;
    border: 1px solid #444444;
    border-radius: 2mm;
    
    @media screen and (max-width: 26cm) {
        width: 100%;
        border: none;
    }
`;

function Root() {
    return <>
        <Header>
            <Nav/>
        </Header>
        <Main>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/education" element={<Education/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/interests" element={<Interests/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Main>
        <Footer/>
    </>
}

const ROUTER = createBrowserRouter(
    [
        {path: "*", Component: Root}
    ]
)

export default function App() {
    return <RouterProvider router={ROUTER}/>
}
