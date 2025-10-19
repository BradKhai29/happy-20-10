import './assets/css/App.css'
import { Navbar } from './pages/Common/Navbar'
import { GiftPage } from './pages/Gift/GiftPage'
import { HomePage } from './pages/Home/HomePage'
import { MusicPage } from './pages/Music/MusicPage'

function App() {

  return (
    <>
      <section style={{
        width: '1000px'
      }}>
        <Navbar></Navbar>
        <HomePage></HomePage>
        <GiftPage></GiftPage>
        <MusicPage></MusicPage>
      </section>
    </>
  )
}

export default App
