import musicIcon from '../../assets/svg/song.svg';
import { MusicPlayer } from './MusicPlayer';

type MusicPageProps = {
    isSelected?: boolean
}

export const MusicPage = ({ isSelected = false }: MusicPageProps) => {
    console.log("Music page ");

    return (
        <section id="music-page" className={isSelected ? '' : 'd-none'}>
            <div>
                <p className="txt-accent-2 txt-sm">3 bài hát hay con muốn gửi tặng cả nhà</p>
                <div className="d-flex gap-md justify-center align-center">
                    <img src={musicIcon} className='icon-xl' alt="rose-icon" />
                    <img src={musicIcon} className='icon-xl' alt="rose-icon" />
                    <img src={musicIcon} className='icon-xl' alt="rose-icon" />
                </div>
            </div>
            <div className='mt-lg pb-lg mb-lg'>
                <MusicPlayer></MusicPlayer>
            </div>
        </section>
    )
}