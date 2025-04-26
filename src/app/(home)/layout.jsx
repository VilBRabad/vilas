import HomeHeader from '@/components/headers/home-header'
import Footer from '@/components/footer'

export default function HomeLayout({ children }) {
  return (
    <div className='home-container'>
        <div className='home-page'>
          <HomeHeader />
          {children}
        </div>
        <Footer/>
    </div>
  )
}