import musicIcon from "../../assets/svg/song.svg";
import classes from "./Navbar.module.css";

type NavMusicBtnProps = {
    onClick?: () => void,
    selected?: boolean
};

export const NavMusicBtn = ({ onClick, selected = false }: NavMusicBtnProps) => {
    return (
        <div className={`${classes['navbar-btn']} bg-primary ${selected ? classes.selected : ''}`} onClick={onClick}>
            <img
                className={classes['navbar-icon']}
                src={musicIcon}
                alt="Menu icon"
            />
            <span className={`ml-sm fw-bold txt-accent-1 ${classes['navbar-btn-text']}`}>Nhạc 20/10</span>
        </div>
    )
}