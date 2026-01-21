import s from './Request.module.css'

export const Request = () => {
    return (
        <section className={s.request}>
            <div className={s.request__container}>
                <form className={s.request__form}>
                    <h1 className={s.request__title}>Submit a request and we will assist you with your project</h1>
                    <div className={s.request__form__container}>
                        <input type="email" placeholder="Enter your email" className={s.request__form__input}/>
                        <button className={s.request__form__btn}>Submit a request</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

