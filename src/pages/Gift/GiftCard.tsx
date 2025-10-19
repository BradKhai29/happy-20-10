import { useState } from "react"
import classes from './GiftCard.module.css';
import menuIcon from '../../assets/svg/menu.svg';
// Import images
import grandmaImg from '../../assets/img/grandma.jpg';
import momImg from '../../assets/img/mom.jpg';
import aunt1Img from '../../assets/img/aunt1.jpg';
import aunt2Img from '../../assets/img/aunt2.jpg';

class CardContent {
    title?: string;
    imgUrl?: string;
    shortDescription?: string;
    longDescription?: string;

    constructor(title: string, imgUrl: string, shortDes: string, longDes: string) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.shortDescription = shortDes;
        this.longDescription = longDes;
    }
}

const contents: CardContent[] = [
    new CardContent("Bà ngoại", "", "Người mà con luôn kính trọng, yêu quý và biết ơn", "Chúc bà ngoại dịp 20/10 thật khoẻ mạnh, thật vui vẻ và đón nhận nhiều niềm vui"),
    new CardContent("Mẹ", "", "Người đã dành công sức quan tâm và chăm sóc con", "Chúc mẹ dịp 20/10 sức khoẻ căng tràn, tươi tắn hơn và nhiều điều tích cực đến với mẹ"),
    new CardContent("Dì Bo", "", "Người mà con yêu quý, luôn nổ lực để hỗ trợ gia đình", "Con mong rằng dì Bo dịp 20/10 này sức khoẻ thật tốt, vui vẻ và đón nhận nhiều niềm vui và may mắn hơn nữa"),
    new CardContent("Dì Bê", "", "Người mà con yêu quý, mong ước điều tốt đẹp đến với dì", "Con chúc dì Bê sức khoẻ vẫn luôn khoẻ mạnh, hạnh phúc và nhiều điều tốt đẹp đến với dì Bê. Chúc cháu nhỏ của dì khoẻ mạnh và phát triển thuận lợi"),
];

const contentOpts = {
    GrandMa: 0,
    Mom: 1,
    Aunt1: 2,
    Aunt2: 3,
};

export const GiftCard = () => {
    const [optIndex, setOptIndex] = useState(contentOpts.GrandMa);
    const [optContent, setOptContent] = useState(contents[contentOpts.GrandMa]);
    const [showMsg, setShowMsg] = useState(true);

    function setOption(optionIndex: number) {
        setOptIndex(optionIndex);
        setOptContent(contents[optionIndex]);
        setShowMsg(false);
    }

    function toggleMessage() {
        const isShow = !showMsg;
        setShowMsg(isShow);
    }

    return (
        <div className={`${classes['gift-card']} d-flex w-100 flex-column bg-secondary`}>
            <div className={`${classes.content} mt-md`}>
                <div className="d-flex align-center justify-between">
                    <p className="txt-accent-2 fw-bold txt-md my-none">{optContent.title}</p>
                    <div className="d-flex align-center">
                        <img src={menuIcon} alt="menu-icon" className="icon-xl" />
                    </div>
                </div>
                <div className={`${classes['gift-card-img']} mt-lg radius-sm clip-content ${showMsg ? '' : 'd-none'}`}>
                    <img className={`img ${optIndex == contentOpts.GrandMa ? '' : 'd-none'}`} src={grandmaImg} />
                    <img className={`img ${optIndex == contentOpts.Mom ? '' : 'd-none'}`} src={momImg} alt="" />
                    <img className={`img ${optIndex == contentOpts.Aunt1 ? '' : 'd-none'}`} src={aunt1Img} alt="" />
                    <img className={`img ${optIndex == contentOpts.Aunt2 ? '' : 'd-none'}`} src={aunt2Img} alt="" />
                </div>
                <div className={`${classes['gift-card-msg']} mt-lg radius-sm bg-primary clip-content ${showMsg ? 'd-none' : ''}`}>
                    <span className="txt-accent-2">
                        {optContent.longDescription}
                    </span>
                </div>
                <div className="d-flex justify-center align-center gap-md mt-lg">
                    {contents.map((_, index) => (
                        <span key={index} className={`${classes['slider-btn']} ${index == optIndex ? 'bg-accent-2' : 'bg-accent-1'}`} onClick={() => setOption(index)}>
                        </span>
                    ))}
                </div>
                <div className={`mt-lg pb-lg`}>
                    <div className={`${classes.padding} ${classes.text}`}>{optContent.shortDescription}</div>
                    <div className="d-flex justify-between align-center mt-lg">
                        <div className={`${classes['show-btn']} bg-accent-2 txt-primary`} onClick={toggleMessage}>{showMsg ? 'Xem lời chúc' : 'Xem ảnh'}</div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}