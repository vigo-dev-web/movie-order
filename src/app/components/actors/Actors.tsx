'use client'

import styles from './Actors.module.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import { actors } from '../../../data/actors'
import { useRef, useState } from 'react'

const Actors = () => {
   const [_, setInit] = useState(false)
	const prevRef = useRef(null)
   const nextRef = useRef(null)


	return (
		<section className={styles.actors}>
			<div className={styles.container}>
				<h2 className={styles.title}>Актерский состав</h2>
				<Swiper
               className={styles.sliderContainer}
               onInit={() => setInit(true)}
					modules={[Navigation, Pagination]}
					spaceBetween={16}
					slidesPerView={2}
					navigation={{
						nextEl: nextRef.current,
						prevEl: prevRef.current
					}}
					pagination={{ el: '.swiper-pagination', type: 'progressbar', clickable: true, dynamicBullets: false }}
					onSlideChange={() => console.log('Cлайд изменился')}
					breakpoints={{
						914: {
							slidesPerView: 4,
							spaceBetween: 24
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 60
						}
					}}
				>
					<SwiperSlide>
						<div>Slide 1</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>Slide 2</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>Slide 3</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>Slide 4</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>Slide 5</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>Slide 6</div>
					</SwiperSlide>
					<div
						className={styles.buttonPrev}
						ref={prevRef}
					></div>
					<div
						className={styles.buttonNext}
						ref={nextRef}
					></div>
					<div className='swiper-pagination'></div>
				</Swiper>
			</div>
		</section>
	)
}

export default Actors
