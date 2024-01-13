import React, {useState, FC} from "react";

interface NavItem {

    title: string;
    url: string;

}

const headerNav : NavItem[] = [
    {

        title: "log in",
        url: "#login"

    },

    {
        title: "sign up",
        url: "#signup"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#portfolio"
    },


];


const Header:FC = () => {


    const [show, setShow] = useState<boolean>(false);
    
    const toggleMenu = () => {
        setShow((prevShow: boolean)=> !prevShow);

    };

        return (


        <header id = "header" role ="banner">
            <div className = "header__inner">
                <div className = "header__logo">
                    <a href="/">Pick the gold<em>react.js</em></a>
            </div>
            <nav className={`header__nav ${show ? "show" : ""}`} role = "navigation" aria-label = "메인 메뉴">
                <ul>
                    {headerNav.map((nav: NavItem, key: number) => (

                        <li key= {key}>
                            <a href = {nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div 
            className = "header__nav__mobile"
            id="headerToggle"
            aria-controls = "primary-menu"
            aria-expanded = {show ? "true" : "false"}
            role = "button"
            tabIndex = {0}
            onClick = {toggleMenu}
            >

                <span></span>
            </div>
            </div> 
        </header>

    );
};

export default Header;
