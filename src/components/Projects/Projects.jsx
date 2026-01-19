import {Swiper, SwiperSlide} from "swiper/react";
import {BREAKPOINTS, PROJECTS_LIST} from "../Services/constants.jsx";
import s from './Projects.module.css'
import 'swiper/css';
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import {useState} from "react";
import {SwiperButton} from "../SwiperButton/SwiperButton.jsx";

export const Projects = () => {
    const [openId, setOpenId] = useState(null)
    const handleCollapseText = (id) => setOpenId((prev) => prev === id ? null : id)

    return (
        <section className={s.projects}>
            <h1 className={s.projects__title}>Our Projects</h1>
            <Swiper className='swiper' slidesPerView={1} spaceBetween={20} loop breakpoints={BREAKPOINTS}>
                {
                    PROJECTS_LIST.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className={s.project__item__wrapper}>
                                <div className={s.projects__item}>
                                    <img src={project.src} alt="" className={s.projects__item__image}/>
                                    <h1 className={s.projects__item__title}>{project.title}</h1>
                                    <h2 className={s.projects__item__text}>{project.text}</h2>
                                    <p className={`${s.description} ${openId === project.id ? s.expanded : s.collapsed}`}>
                                        {project.description}
                                    </p>
                                    <button className={s.project__item__collapse}
                                            onClick={() => handleCollapseText(project.id)}>{openId === project.id ? 'Show less' : 'Show more'}</button>
                                    <a className={s.projects__item__link} href={project.link}>more</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <div className={s.button__Wrapper}>
                    <SwiperButton src={ArrowLeft} direction='prev' />
                    <SwiperButton src={ArrowRight} direction='next'/>
                </div>
            </Swiper>

        </section>
    );
};

