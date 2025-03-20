import React, { useState } from "react";
import { Button } from "./Button";
import '../styles/header.scss';
import logo from '../assets/logo.svg';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header`}>
            <div className="container">
                <div className="header__wrap">
                    <div className={`header__logo ${isMenuOpen ? 'hidden' : ''}`}>
                        <img src={logo} alt="Gendalf logo" />
                    </div>
                    <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className={isMenuOpen ? 'hidden' : ''}></div>
                        <div className={isMenuOpen ? 'hidden' : ''}></div>
                        <div className={isMenuOpen ? 'hidden' : ''}></div>
                    </div>
                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-link">
                            <li className="nav-item">
                                <a href="#">Профориентация</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Выбрать вакансию</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Карьера в ГЭНДАЛЬФ</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Стажерство</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Отзывы</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__button">
                        {Button({ type: 'button', name: 'move-interview_blue', children: 'Записаться на собеседование' })}
                    </div>
                </div>
            </div>
        </header>
    );
}