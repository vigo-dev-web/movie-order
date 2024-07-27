import { ReactNode } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const MainLayout = ({ children }: {children: ReactNode}) => {
	return (
		<>
         <Header />
         {children}
			<Footer />
		</>
	)
}

export default MainLayout
