import s from './Request.module.css'
import {useState} from "react";

export const Request = () => {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (event) => setInputValue(event.target.value)
    const onSubmit = (event) => event.preventDefault()
    return (
        <section className={s.request}>
            <div className={s.request__container}>
                <form className={s.request__form} onSubmit={onSubmit}>
                    <h1 className={s.request__title}>Submit a request and we will assist you with your project</h1>
                    <div className={s.request__form__container}>
                        <input type="email" placeholder="Enter your email" className={s.request__form__input}
                               value={inputValue} onChange={handleChange}/>
                        <button type="submit" className={s.request__form__btn}>Submit a request</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

