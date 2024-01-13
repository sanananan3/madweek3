import React from "react";
import Header from "../components/Header";
import Intro from "../components/Login";
import Skill from "../components/SignUp";
import Footer from "../components/Footer";
import Main from "../components/Main";


const HomeView: React.FC = () => {
    return (
        <>

        <Header />
        <Main>
            <Intro />
            <Skill />

        </Main>
        <Footer />
        
        </>
    );


};


export default HomeView;