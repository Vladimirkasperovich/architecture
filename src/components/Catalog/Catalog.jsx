import CatalogCover from '../../assets/catalog-cover.jpg'
import s from './Catalog.module.css'
import {useState} from "react";

export const Catalog = () => {
    const [inputValue, setInputValue] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = (e) => setInputValue(e.target.value)
    const handleCheck = (e) => setIsChecked(e.target.checked)
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className={s.catalog}>
            <h1 className={s.catalog__title}>Get a catalog of our projects</h1>
            <div className={s.catalog__block}>
                <div className={s.catalog__cover}>
                    <img src={CatalogCover} alt="Catalog cover"/>
                </div>
                <form className={s.form} onSubmit={onSubmit}>
                    <h2 className={s.form__title}>Leave your email to receive
                        our project catalog</h2>
                    <h3 className={s.form__text}>The catalog will help you choose a style and plan your layout.</h3>
                    <input type="email" onChange={handleChange} value={inputValue} className={s.form__input}
                           placeholder="Enter your email"/>
                    <label htmlFor="checkbox" className={s.catalog__formLabel}>
                        <input type="checkbox" id="checkbox" onChange={handleCheck} checked={isChecked}
                               className={s.catalog__formCheckbox}/>
                        I agree to the processing of personal data
                    </label>
                    <button type='submit' className={s.catalog__formBtn}>Get the catalog</button>
                </form>
            </div>
        </section>
    );
};

