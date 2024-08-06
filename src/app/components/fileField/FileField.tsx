'use client'

import Image from 'next/image'
import styles from './FileField.module.scss'
import { ChangeEvent, useState } from 'react'
import { secondFont } from '@/app/fonts'

const FileField = () => {
	const [selectedFile, setSelectedFile] = useState<File | undefined | null>(null)
	const [selectedName, setSelectedName] = useState('')

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		setSelectedFile(file)
		setSelectedName(file!.name)
	}

	return (
		<>
			<div className={selectedFile ? styles.inputWrapper : styles.inputErrorWrapper}>
				<div className={styles.container}>
					<p>{selectedName || 'Прикрепите файл'}</p>
					<Image
						src={'/clip.svg'}
						height={24}
						width={14}
						alt='скрепка'
					></Image>
				</div>
				<input
					type='file'
					name='file'
					id='file'
					className={styles.input}
					onChange={handleFileChange}
				/>
			</div>
			<div>
				{selectedFile ? (
					<p className={styles.emptyField}>{'Поле не заполнено'}</p>
				) : (
					<p className={`${styles.errorField} ${secondFont.className}`}>{'Поле не заполнено'}</p>
				)}
			</div>
		</>
	)
}

export default FileField
