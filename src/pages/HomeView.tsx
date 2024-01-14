import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header";
import Intro from "../components/Intro";
import MyPage from "../components/MyPage";
import Footer from "../components/Footer";
import Main from "../components/Main";

import Modal from '../components/Modal';
import Login from "../components/Login";
import SignUp from "../components/SignUp";



const HomeView: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [showModal, setShowModal] = useState(false);
    const [isLoginView, setIsLoginView] = useState(true); // 로그인 뷰 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ id: '', username: '' });

    useEffect(() => {
        const username = searchParams.get('username');
        const id = searchParams.get('id');
        if (username && id) {
            setIsLoggedIn(true);
            setUserData({ id, username });
        }
    }, [searchParams]);

    const handleLogin = (loggedIn: boolean) => {
        setIsLoggedIn(loggedIn);
        if (loggedIn) {
            setShowModal(false); // 로그인 성공 시 모달 닫기
        }
    };

    return (
        <>
            <Header setShowModal={setShowModal} isLoggedIn={isLoggedIn} />
            <Main>
                <Intro />
                <MyPage />
            </Main>
            <Footer />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {isLoginView ? (
                        <>
                            <Login onLoginSuccess={() => handleLogin(true)} />
                            <p onClick={() => setIsLoginView(false)}>Sign up</p>
                        </>
                    ) : (
                        <>
                            <SignUp />
                            <p onClick={() => setIsLoginView(true)}>Log in</p>
                        </>
                    )}
                </Modal>
            )}
        </>
    );


};


export default HomeView;