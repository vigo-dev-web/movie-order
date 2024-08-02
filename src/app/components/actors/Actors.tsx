'use client'

import { useRef, useState } from 'react'
import styles from './Actors.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { actors } from '../../../data/actors'
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
						spaceBetween={2}
						slidesPerView={1}
						onInit={() => setInit(true)}
						navigation={{
							nextEl: nextRef.current,
							prevEl: prevRef.current
						}}
						pagination={{ el: '.swiper-pagination', type: 'progressbar', clickable: true, dynamicBullets: false }}
						onSlideChange={() => console.log('Cлайд изменился')}
						breakpoints={{
							914: {
								slidesPerView: 4,
								spaceBetween: 5
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 5
							},
							420: {
								slidesPerView: 2,
								spaceBetween: 5
							},
							360: {
								slidesPerView: 1,
								spaceBetween: 5
							}
						}}
					>
						{actors.map((actor) => (
							<SwiperSlide key={actor.id}>
								<ActorCard {...actor} />
							</SwiperSlide>
						))}
						<div
							className='swiper-button-prev'
							ref={prevRef}
						></div>
						<div
							className='swiper-button-next'
							ref={nextRef}
						></div>
						<div className='swiper-pagination'></div>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Actors
