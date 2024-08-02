'use client'

import Image from 'next/image'
import styles from './MovieFrame.module.scss'
import Button from '../ui/button/Button'
import { useState } from 'react'

const MovieFrame = () => {
	const [isShowFrame, setIsShowFrame] = useState(false)
	const handleShowFrame = () => {
		setIsShowFrame((prev) => !prev)
	}
	
	return (
		<section className={styles.movieFrame}>
			<div className={styles.container}>
				<h2 className={styles.title}>Кадры со съемок</h2>
				<div className={styles.gridConatainer}>
					<div className={styles.gridTemplate}>
						<div className={styles.mainItem}>
							<Image
								className={styles.mainFrame}
								src='/frame-1.jpg'
								sizes='588px'
								width={588}
								height={588}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
								alt='Основной кадр'
							/>
						</div>
						<div className={styles.firstItem}>
							<Image
								className={styles.frame}
								src='/frame-2.jpg'
								height={282}
								width={282}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
								alt='Кадр'
							/>
						</div>
						<div className={styles.secondItem}>
							<Image
								className={styles.frame}
								src='/frame-3.jpg'
								height={282}
								width={282}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
								alt='Кадр'
							/>
						</div>
						<div className={styles.thirdItem}>
							<Image
								className={styles.frame}
								src='/frame-4.jpg'
								height={282}
								width={282}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
								alt='Кадр'
							/>
						</div>
						<div className={styles.fourthtItem}>
							<Image
								className={styles.frame}
								src='/frame-5.jpg'
								height={282}
								width={282}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
								alt='Кадр'
							/>
						</div>
					</div>
					{isShowFrame ? (
						<div className={styles.subGridTemplate}>
							<div>
								<Image
									className={styles.mainFrame}
									src='/frame-1.jpg'
									sizes='282px'
									width={282}
									height={282}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}}
									alt='Основной кадр'
								/>
							</div>
							<div>
								<Image
									className={styles.frame}
									src='/frame-2.jpg'
									height={282}
									width={282}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}}
									alt='Кадр'
								/>
							</div>
							<div>
								<Image
									className={styles.frame}
									src='/frame-3.jpg'
									height={282}
									width={282}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}}
									alt='Кадр'
								/>
							</div>
							<div>
								<Image
									className={styles.frame}
									src='/frame-4.jpg'
									height={282}
									width={282}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}}
									alt='Кадр'
								/>
							</div>
						</div>
					) : (
						''
					)}
				</div>

				<Button
					opacity={true}
					onClick={handleShowFrame}
				>
					{isShowFrame ? 'Cкрыть кадры' : 'Показать еще'}
				</Button>
			</div>
		</section>
	)
}

export default MovieFrame
