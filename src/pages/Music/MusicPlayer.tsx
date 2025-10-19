import { useState } from "react"
import classes from './MusicPlayer.module.css';
// import menuIcon from '../../assets/svg/menu2.svg';
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
    ChuaBaoGioMeKe: "https://www.youtube.com/watch?v=sICoUsvVAok",
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

    function setOption(optionIndex: number) {
        setOptIndex(optionIndex);
        setOptContent(contents[optionIndex]);
        console.log(stopMusic);
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
            <video src={youtubeLinks.UocMoCuaMe}></video>
        </div>
    )
}