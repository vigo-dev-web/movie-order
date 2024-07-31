import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import styles from './Slider.module.scss'
import { actors } from '../../../../data/actors'
import ActorCard from '../actorCard/ActorCard'

const Slider = () => {
   console.log(actors);
   
	return (
		<Swiper
			// className={styles.sliderContainer}
			modules={[Navigation, Pagination]}
			spaceBetween={16}
			slidesPerView={2}
			effect='coverflow'
			// coverflowEffect={{ rotate: 35, slideShadows: false, depth: 50, stretch: 3 }}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}}
			pagination={{ el: '.swiper-pagination', type: 'progressbar', clickable: true, dynamicBullets: false }}
			onSlideChange={() => console.log('Cлайд изменился')}
			breakpoints={{
				914: {
					slidesPerView: 5,
					spaceBetween: 24
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 60
				}
			}}
      >
			{actors.map((actor) => (
				<>
					<SwiperSlide key={actor.id}>
						{
							<ActorCard
								// key={actor.id}
								// actor={actor}
							/>
						}
					</SwiperSlide>
				</>
			))}
			<div className='swiper-button-prev'></div>
			<div className='swiper-button-next'></div>
			<div className='swiper-pagination'></div>
		</Swiper>
	)
}

export default Slider
