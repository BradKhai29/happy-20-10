import { useState } from "react"
import classes from './MusicPlayer.module.css';
// Import icons.
// import menuIcon from '../../assets/svg/menu2.svg';
import playIcon from '../../assets/svg/play.svg';
import pauseIcon from '../../assets/svg/pause.svg';
import playNextIcon from '../../assets/svg/play-next.svg';
// Image import
import orangeFlowerImg from '../../assets/img/orange_flower.jpg';
import yellowFlowerImg from '../../assets/img/yellow_flower.jpg';
import gardenFlowerImg from '../../assets/img/garden_flower.jpg';

type MusicPlayerProps = {
    stopMusic?: boolean
}

class CardContent {
    title?: string;
    shortDescription?: string;
    musicUrl?: string;

    constructor(title: string, shortDes: string, musicUrl: string) {
        this.title = title;
        this.shortDescription = shortDes;
        this.musicUrl = musicUrl;
    }
}

const youtubeLinks = {
    ChuaBaoGioMeKe: "https://www.youtube.com/embed/sICoUsvVAok?si=u6lczwe6Nx72AkVr",
    UocMoCuaMe: "https://www.youtube.com/watch?v=1lZB1IBaXxU",
    DieuTuyetVoi: "https://www.youtube.com/watch?v=IJheEMB7dJU",
}

const contents: CardContent[] = [
    new CardContent("Chưa bao giờ mẹ kể", "MIN FT. ERIK", youtubeLinks.ChuaBaoGioMeKe),
    new CardContent("Ước mơ của Mẹ", "Văn Mai Hương", youtubeLinks.UocMoCuaMe),
    new CardContent("Điều tuyệt vời", "Mỹ Tâm", youtubeLinks.DieuTuyetVoi),
];

const contentOpts = {
    ChuaBaoGioMeKe: 0,
    UocMoCuaMe: 1,
    DieuTuyetVoi: 2,
};

export const MusicPlayer = ({ stopMusic = false }: MusicPlayerProps) => {
    const [optIndex, setOptIndex] = useState(contentOpts.ChuaBaoGioMeKe);
    const [optContent, setOptContent] = useState(contents[contentOpts.ChuaBaoGioMeKe]);
    // Music player state.
    const [isPlayed, setIsPlayed] = useState(false);
    // const [video, setVideo] = useState<HTMLAudioElement>();

    /**
     * Set the song-play index.
     * @param optionIndex Index of the song to play.
     */
    function setOption(optionIndex: number) {
        setOptIndex(optionIndex);
        setOptContent(contents[optionIndex]);
        console.log(stopMusic);
    }

    function togglePlayMusic() {
        const playMusic = !isPlayed;
        setIsPlayed(playMusic);

        if (playMusic) {
            const videoElement = document.getElementById("video-player");
            console.log(videoElement);
            videoElement?.setAttribute('crossorigin', 'anonymous');

            // setVideo(videoElement as HTMLAudioElement);
            // (videoElement as HTMLAudioElement).load();
            // (videoElement as HTMLAudioElement).play();
        }
    }

    function nextSong(goToNextSong: boolean) {
        setIsPlayed(false);

        if (goToNextSong) {
            const nextIndex = optIndex + 1;
            if (nextIndex > contents.length - 1) {
                setOption(0);
            }
            else {
                setOption(nextIndex);
            }
            return;
        }

        const nextIndex = optIndex - 1;
        if (nextIndex < 0) {
            setOption(contents.length - 1);
        }
        else {
            setOption(nextIndex);
        }
    }

    return (
        <div>
            <div className={`${classes['gift-card']} d-flex w-100 flex-column bg-secondary`}>
                <div className={`${classes.content} mt-md`}>
                    <div className={`${classes['gift-card-img']} mt-lg radius-sm clip-content`}>
                        <img className={`img ${optIndex == contentOpts.ChuaBaoGioMeKe ? '' : 'd-none'}`} src={orangeFlowerImg} />
                        <img className={`img ${optIndex == contentOpts.UocMoCuaMe ? '' : 'd-none'}`} src={yellowFlowerImg} alt="" />
                        <img className={`img ${optIndex == contentOpts.DieuTuyetVoi ? '' : 'd-none'}`} src={gardenFlowerImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-lg d-flex justify-between" onClick={() => setOption(1)}>
                <button></button>
                <div className="d-flex flex-column">
                    <div>{optContent.title}</div>
                    <div>{optContent.shortDescription}</div>
                </div>
                <button></button>
            </div>
            <div id="music-btn-control" className="d-flex align-center justify-center gap-lg">
                <div className={`bg-primary ${classes['player-btn']}`} id="back-btn" onClick={() => nextSong(false)}>
                    <img src={playNextIcon} alt="" className={`icon-md  ${classes['reverse']}`} />
                </div>
                <div className={`bg-primary ${classes['player-btn']}`} id="play-btn" onClick={togglePlayMusic}>
                    <img src={isPlayed ? pauseIcon : playIcon} alt="" className="icon-md" />
                </div>
                <div className={`bg-primary ${classes['player-btn']}`} id="next-btn" onClick={() => nextSong(true)}>
                    <img src={playNextIcon} alt="" className="icon-md" />
                </div>
            </div>
            <span>{optContent.musicUrl}</span>
            <audio src={optContent.musicUrl} title="YouTube video player"></audio>
        </div>
    )
}