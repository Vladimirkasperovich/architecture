import s from './Projects.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

export const Projects = () => {

    return (
        <section className={s.projects}>
            <h1 className={s.projects__title}>Our Projects</h1>
            <Swiper className={s.projects__list} slidesPerView={1} spaceBetween={20} loop breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            >
                <SwiperSlide className="swiper-slide">
                    <div className={s.projects__item}>
                        <img src="/src/assets/projects/projects1.jpg" alt="" className="projects__item__image"/>
                        <h1 className={s.projects__item__title}>Apartment 55.6 m²</h1>
                        <h2 className={s.projects__item__text}>For a young couple of lawyers</h2>
                        <h3 className={s.projects__item__description}>The main idea of this interior is to create a
                            bright,
                            light, and cozy space. Warm colors and soft lines are used throughout the design to evoke a
                            sense of calm and harmony.</h3>
                        <a className={s.projects__item__link} href="#">more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={s.projects__item}>
                        <img src="/src/assets/projects/projects2.jpg" alt="" className="projects__item__image"/>
                        <h1 className={s.projects__item__title}>The house</h1>
                        <h2 className={s.projects__item__text}>For a family of doctors</h2>
                        <h3 className={s.projects__item__description}>A comfortable space for the homeowners is ensured
                            through proper organization and planning of the house. The open terrace seamlessly connects
                            the
                            pool, kitchen, and living areas. </h3>
                        <a className={s.projects__item__link} href="#">more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={s.projects__item}>
                        <img src="/src/assets/projects/projects3.jpg" alt="" className="projects__item__image"/>
                        <h1 className={s.projects__item__title}>The house</h1>
                        <h2 className={s.projects__item__text}>For a family of doctors</h2>
                        <h3 className={s.projects__item__description}>A comfortable space for the homeowners is ensured
                            through proper organization and planning of the house. The open terrace seamlessly connects
                            the
                            pool, kitchen, and living areas. </h3>
                        <a className={s.projects__item__link} href="#">more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={s.projects__item}>
                        <img src="/src/assets/projects/projects1.jpg" alt="" className="projects__item__image"/>
                        <h1 className={s.projects__item__title}>Apartment 55.6 m²</h1>
                        <h2 className={s.projects__item__text}>For a young couple of lawyers</h2>
                        <h3 className={s.projects__item__description}>The main idea of this interior is to create a
                            bright,
                            light, and cozy space. Warm colors and soft lines are used throughout the design to evoke a
                            sense of calm and harmony.</h3>
                        <a className={s.projects__item__link} href="#">more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={s.projects__item}>
                        <img src="/src/assets/projects/projects2.jpg" alt="" className="projects__item__image"/>
                        <h1 className={s.projects__item__title}>The house</h1>
                        <h2 className={s.projects__item__text}>For a family of doctors</h2>
                        <h3 className={s.projects__item__description}>A comfortable space for the homeowners is ensured
                            through proper organization and planning of the house. The open terrace seamlessly connects
                            the
                            pool, kitchen, and living areas. </h3>
                        <a className={s.projects__item__link} href="#">more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={s.projects__item}>
                        <img src="/src/assets/projects/projects3.jpg" alt="" className="projects__item__image"/>
                        <h1 className={s.projects__item__title}>The house</h1>
                        <h2 className={s.projects__item__text}>For a family of doctors</h2>
                        <h3 className={s.projects__item__description}>A comfortable space for the homeowners is ensured
                            through proper organization and planning of the house. The open terrace seamlessly connects
                            the
                            pool, kitchen, and living areas. </h3>
                        <a className={s.projects__item__link} href="#">more</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

