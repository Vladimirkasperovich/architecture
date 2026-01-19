import AdvantagesImg from '../../assets/advantages.jpg'
import s from './Advantages.module.css'

export const Advantages = () => {
    return (
        <section className={s.advantages}>
            <div className={s.advantages__block}>
                <h1 className={s.advantages__title}>from request to turnkey delivery</h1>
                <ol className={s.advantages__list}>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>We receive your request</p>
                        <p className={s.advantages__item__text}>Call us or send a message through the website.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>Let’s get acquainted</p>
                        <p className={s.advantages__item__text}>During the first meeting, we will discuss all the
                            details of your project.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>We visit the site</p>
                        <p className={s.advantages__item__text}>We meet on-site to take necessary measurements, conduct
                            a photo survey, and complete a
                            detailed
                            technical brief.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>We discuss and agree on the overall project budget.</p>
                        <p className={s.advantages__item__text}>Costs for interior elements, finishing materials,
                            furniture, and equipment.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>We define the layout solution.</p>
                        <p className={s.advantages__item__text}>At this stage, we offer several options for zoning,
                            furniture placement, and equipment
                            layout.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>We develop the design concept.</p>
                        <p className={s.advantages__item__text}>Based on your tastes and taking into account current
                            trends and directions, we define the
                            style
                            of your future interior.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>We prepare the working documentation.</p>
                        <p className={s.advantages__item__text}>At the next stage, we prepare all the necessary working
                            drawings.</p>
                    </li>
                    <li className={s.advantages__item}>
                        <p className={s.advantages__item__title}>Project outfitting</p>
                        <p className={s.advantages__item__text}>At the final outfitting stage, we compile specifications
                            for furniture, lighting, and
                            interior
                            items.</p>
                    </li>
                </ol>
            </div>
            <div className={s.advantages__img}>
                <img src={AdvantagesImg} alt="Advantages images"/>
            </div>
        </section>
    );
};

