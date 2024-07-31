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
import ActorCard from '../ui/actorCard/ActorCard'

const Actors = () => {
	const [_, setInit] = useState(false)
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	return (
		<section className={styles.actors}>
			<div className={styles.container}>
				<h2 className={styles.title}>Актерский состав</h2>
				<div className={styles.sliderWrapper}>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={5}
						slidesPerView={2}
						onInit={() => setInit(true)}
						// navigation={{
						// 	nextEl: nextRef.current,
						// 	prevEl: prevRef.current
						// }}
						pagination={{ el: '.swiper-pagination', type: 'progressbar', clickable: true, dynamicBullets: false }}
						// >
						// 	<Swiper
						// 		className={styles.sliderContainer}
						// 		modules={[Navigation, Pagination]}
						// 		spaceBetween={80}
						// 		slidesPerView={2}
						// 		navigation={{
						// 			nextEl: nextRef.current,
						// 			prevEl: prevRef.current
						// 		}}
						onSlideChange={() => console.log('Cлайд изменился')}
						breakpoints={{
							914: {
								slidesPerView: 4,
								spaceBetween: 5
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 5
							}
						}}
					>
						<SwiperSlide>
							<ActorCard />
						</SwiperSlide>
						<SwiperSlide>
							<ActorCard />
						</SwiperSlide>
						<SwiperSlide>
							<ActorCard />
						</SwiperSlide>
						<SwiperSlide>
							<ActorCard />
						</SwiperSlide>
						<SwiperSlide>
							<ActorCard />
						</SwiperSlide>
						<SwiperSlide>
							<ActorCard />
						</SwiperSlide>
						{/* <div className={styles.navContainer}> */}
						<div
							className='swiper-button-prev'
							ref={prevRef}
						></div>
						<div
							className='swiper-button-next'
							ref={nextRef}
						></div>
						{/* </div> */}
						<div className='swiper-pagination'></div>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Actors
