import CatalogCover from '../../assets/catalog-cover.jpg'
import s from './Catalog.module.css'

export const Catalog = () => {
    return (
        <section className={s.catalog}>
            <div className={s.catalog__block}>
                <div>
                    <h1 className={s.catalog__title}>Get a catalog of our projects</h1>
                    <div className={s.catalog__cover}>
                        <img src={CatalogCover} alt="Catalog cover"/>
                    </div>
                </div>
                <form className={s.form}>
                    <h2 className={s.form__title}>Leave your email to receive
                        our project catalog</h2>
                    <h3 className={s.form__text}>The catalog will help you choose a style and plan your layout.</h3>
                    <input type="email" className={s.form__input} placeholder="Enter your email"/>
                </form>
            </div>
        </section>
    );
};

