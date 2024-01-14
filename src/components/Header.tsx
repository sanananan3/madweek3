import React, { useState, FC } from "react";
import Modal from './Modal';
import Login from "./Login";
import SignUp from "./SignUp";

interface HeaderProps {
    setShowModal: (show: boolean) => void;
    isLoggedIn: boolean;
}

interface NavItem {
    title: string;
    url: string;
    isButton?: boolean; // 이 항목이 버튼인지 아닌지를 나타내는 속성
}


const Header: FC<HeaderProps> = ({ setShowModal, isLoggedIn }) => {
    const [show, setShow] = useState<boolean>(false);

    const toggleMenu = () => {
        setShow((prevShow: boolean) => !prevShow);
    };

    // 로그인/회원가입 버튼 클릭 처리 함수
    const handleLoginSignupClick = () => {
        // 로그인/회원가입 모달 띄우기
        setShowModal(true);
    };

    const headerNav: NavItem[] = [
        // 기존 탭들
        {
            title: "home",
            url: "#home"
        },
        {
            title: "site",
            url: "#site"
        },
        {
            title: "portfolio",
            url: "#portfolio"
        },
        {
            title: "My Page",
            url: "/mypage"
        }
    ];

    if (isLoggedIn) {
        headerNav.push({
            title: "My Page",
            url: "/mypage" // 마이페이지 URL
        });
    } else {
        headerNav.push({
            title: "Login",
            url: "#",
            isButton: true
        });
    }

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">Pick the gold<em>react.js</em></a>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav: NavItem, key: number) => (
                            <li key={key}>
                                {nav.isButton ? (
                                    <button onClick={handleLoginSignupClick}>{nav.title}</button>
                                ) : (
                                    <a href={nav.url}>{nav.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabIndex={0}
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
