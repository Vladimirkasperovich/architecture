import {useSwiper} from "swiper/react";

const ACTION = {
    prev: 'slidePrev',
    next: 'slideNext'
}
export const SwiperButton = (props) => {
    const swiper = useSwiper()

    return (
        <button onClick={() => swiper?.[ACTION[props.direction]]()}>
            <img src={props.src} alt="Change slide"/>
        </button>
    );
};
