import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import PlantCard from "../PlantCard/PlantCard";
import styles from './plantslider.module.css'

const PlantSlider = ({ title, plants }) => {
  return (
    <section>
      <h2>{title}</h2>
      <Swiper
      spaceBetween={30}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
      className={styles.mySwiper}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
        480: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
        768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
        1024: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
        1200: { slidesPerView: 3, spaceBetween: 25, centeredSlides: true },
        1600: { slidesPerView: 4, spaceBetween: 25, centeredSlides: true },
  }}
>

        {plants.map((plant) => (
          <SwiperSlide key={plant.id} className={styles.plant_slide}>
            <PlantCard plant={plant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PlantSlider;
