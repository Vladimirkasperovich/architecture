import AdvantagesImg from '../../assets/advantages.jpg'
import {ADVANTAGES__LIST} from "./constants.js";
import s from './Advantages.module.css'

export const Advantages = () => {
    return (
        <section className={s.advantages}>
            <div className={s.advantages__block}>
                <h1 className={s.advantages__title}>from request to turnkey delivery</h1>
                <ol className={s.advantages__list}>
                    {
                        ADVANTAGES__LIST.map(({id, title, text}) => (
                            <li key={id} className={s.advantages__item}>
                                <p className={s.advantages__item__title}>{title}</p>
                                <p className={s.advantages__item__text}>{text}</p>
                            </li>
                        ))
                    }
                </ol>
            </div>
            <div className={s.advantages__img}>
                <img src={AdvantagesImg} alt="Advantages images"/>
            </div>
        </section>
    );
};

