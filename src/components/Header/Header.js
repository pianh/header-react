import React from 'react';
import './Header.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <h2>navbar</h2>
            </div>
            <nav className="header__content__nav">
                <ul>
                    <li>
                        <a href="/">PageOne</a>
                    </li>
                    <li>
                        <a href="/">PageTwo</a>
                    </li>
                    <li>
                        <a href="/">PageThree</a>
                    </li>
                </ul>
                <button>CTA Page</button>
            </nav>
            <div className="header__content__toggle">
                <BiMenuAltRight />
            </div>
        </header>
    );
};

export default Header;
