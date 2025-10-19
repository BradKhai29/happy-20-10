import { useState } from 'react'
import './assets/css/App.css'
import { Navbar } from './pages/Common/Navbar'
import { GiftPage } from './pages/Gift/GiftPage'
import { HomePage } from './pages/Home/HomePage'
import { MusicPage } from './pages/Music/MusicPage'
import { AppPages, PageManager } from './states/CurrentPage'

function App() {
  const [currentPage, setCurrentPage] = useState(AppPages.HomePage);

  function onNavbarChange() {
    setCurrentPage(PageManager.currentPage);
  }

  return (
    <>
      <section className='w-100'>
        <section className='mb-lg d-flex w-100'>
          <Navbar onChange={onNavbarChange}></Navbar>
        </section>
        <HomePage isSelected={currentPage == AppPages.HomePage}></HomePage>
        <GiftPage isSelected={currentPage == AppPages.GiftPage}></GiftPage>
        <MusicPage isSelected={currentPage == AppPages.MusicPage}></MusicPage>
      </section>
    </>
  )
}

export default App
