import { Button } from "./Button"
import '../styles/header.scss'
import logo from '../assets/logo.svg'

export function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo">
                            <img src={logo} alt="Gendalf logo" />
                    </div>
                    <nav className="nav">
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
                {Button({type: 'button', name: 'move-interview_blue', children: 'Записаться на собеседование'})}
                </div>
                </div>
            </div>
        </header>
    )
}