import s from './Header.module.css'
import {useState} from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleActiveClassName = () => {
        setIsMenuOpen(prevState => !prevState)
    }
    return (
        <header className={s.header__container}>
            <div className={s.header__info}>
                <nav className={s.menu}>
                    <button className={s.menu__btn} onClick={toggleActiveClassName}>
                        <img src="/src/assets/burger-menu.svg" alt="burger menu" className="menu__btn" width={40}
                             height={20}/>
                    </button>
                    <ul className={`${s.menu__list} ${isMenuOpen ? s.active : ''}`}>
                        <li className={s.menu__item}>
                            <a href="#" className={s.menu__link}>ABOUT STUDIO</a>
                        </li>
                        <li className={s.menu__item}>
                            <a href="#" className={s.menu__link}>PRICES</a>
                        </li>
                        <li className={s.menu__item}>
                            <a href="#" className={s.menu__link}>PROJECTS</a>
                        </li>
                        <li className={s.menu__item}>
                            <a href="#" className={s.menu__link}>CONTACTS</a>
                        </li>
                    </ul>
                </nav>
                <a href="#" className={s.logo}>
                    <img src="/src/assets/header-logo.svg" alt="logo"/>
                </a>
                <a href="tel:+380682554585" className={s.header__phone}>
                    <img src="/src/assets/phone.svg" alt="phone"/>
                    <span className={s.phone}>+38 (068) 255 45 85</span>
                </a>
            </div>
            <h1 className={s.header__title}>Architecture
                that shapes space</h1>
            <p className={s.header__text}>We create innovative and aesthetically refined spaces where comfort and
                functionality merge with
                contemporary design.</p>
            <a href="#" className={s.header__btn}>Submit a request</a>
        </header>
    );
};

