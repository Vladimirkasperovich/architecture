import FooterTitle from "../../assets/footer-title.svg"
import Copyright from "../../assets/copyright.svg"
import Email from '../../assets/footer/email.svg'
import Instagram from '../../assets/footer/instagram.svg'
import Facebook from '../../assets/footer/facebook.svg'
import Telega from '../../assets/footer/telegram.svg'
import Pinterest from '../../assets/footer/pinterest.svg'
import Map from '../../assets/footer/map.svg'
import Phone from '../../assets/phone.svg'
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__container}>
                <div className={s.footer__inner}>
                    <a href="#" className={s.footer__logo}>
                        <img src={FooterTitle} alt="Footer title"/>
                    </a>
                    <p className={s.footer__copy}>
                        <img src={Copyright} alt="Copyright"/>
                        2010-2025 Bureau
                    </p>
                </div>
                <ul className={s.footer__nav__list}>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>About studio</a>
                    </li>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>PRICES</a>
                    </li>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>PROJECTS</a>
                    </li>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>CONTACTS</a>
                    </li>
                </ul>
                <ul className={s.footer__nav__list}>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>Interior Design</a>
                    </li>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>Architectural Design</a>
                    </li>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>Author’s Supervision</a>
                    </li>
                    <li className={s.footer__nav__item}>
                        <a href="#" className={s.footer__nav__item__link}>Turnkey Projects</a>
                    </li>
                </ul>
                <ul className={s.footer__media__list}>
                    <li className={s.footer__media__item}>
                        <a href="#" className={s.footer__media__link}>
                            <img src={Email} alt="Email"/>
                            <span className={s.footer__meta__text}> formastudio@gmail.com</span>
                        </a>
                    </li>
                    <li className={s.footer__media__item}>
                        <a href="#" className={s.footer__media__link}>
                            <img src={Instagram} alt="Instagram"/>
                            <span className={s.footer__meta__text}>formastudio</span>
                        </a>
                    </li>
                    <li className={s.footer__media__item}>
                        <a href="#" className={s.footer__media__link}>
                            <img src={Facebook} alt="Facebook"/>
                            <span className={s.footer__meta__text}>forma.studio</span>
                        </a>
                    </li>
                    <li className={s.footer__media__item}>
                        <a href="#" className={s.footer__media__link}>
                            <img src={Telega} alt="Telega"/>
                            <span className={s.footer__meta__text}>@forma.studio</span>
                        </a>
                    </li>
                    <li className={s.footer__media__item}>
                        <a href="#" className={s.footer__media__link}>
                            <img src={Pinterest} alt="Pinterest"/>
                            <span className={s.footer__meta__text}>forma.studio</span>
                        </a>
                    </li>
                </ul>
                <ul className={s.footer__meta__list}>
                    <li className={s.footer__meta__item}>
                        <a href="#" className={s.footer__meta__link}>
                            <img src={Map} alt="Map" className={s.map__image}/>
                            <span className={s.footer__meta__text}>Kyiv, 14 <br/>
                            Teatralna Street</span>
                        </a>
                    </li>
                    <li className={s.footer__meta__item}>
                        <a href="tel:+380682554585 " className={s.footer__meta__link}>
                            <img src={Phone} alt="Phone"/>
                           <span className={s.footer__meta__text}> +38 (068) 255 45 85</span>
                        </a>
                    </li>
                    <li className={s.footer__meta__item}>
                        <p className={s.footer__meta__text}>
                            Working hours: <br/>
                            Mon–Fri <br/>
                            from 9:00 до 17:00
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

