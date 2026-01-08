import s from './Services.module.css'

export const Services = () => {
    return (
        <section className={s.services}>
            <h1 className={s.services__title}>Our Services</h1>
            <ul className={s.services__list}>
                <li className={s.services__item}>
                    <p className={s.services__item__title}>Architectural Design</p>
                    <p className={s.services__item__text}>We will design your home personally for you, combining
                        ergonomics and
                        beauty, guided by a designer’s vision of space.</p>
                </li>
                <li className={s.services__item}>
                    <p className={s.services__item__title}>Interior Design</p>
                    <p className={s.services__item__text}>Cпроектуємо ексклюзивний дизайн інтер'єру з урахуванням ваших
                        побажань і
                        наших завдань.</p>
                </li>
                <li className={s.services__item}>
                    <p className={s.services__item__title}>Architectural supervision</p>
                    <p className={s.services__item__text}>We oversee the implementation of our projects from concept to
                        realization</p>
                </li>
                <li className={s.services__item}>
                    <p className={s.services__item__title}>Turnkey Projects</p>
                    <p className={s.services__item__text}>We handle everything from concept development to project
                        completion, so
                        you don’t have to worry about a thing.</p>
                </li>
            </ul>
        </section>
    )
}