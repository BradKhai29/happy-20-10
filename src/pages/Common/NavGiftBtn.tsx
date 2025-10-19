import giftIcon from "../../assets/svg/smile.svg";
import classes from "./Navbar.module.css";

type NavGiftBtnProps = {
    onClick?: () => void,
    selected?: boolean
};

export const NavGiftBtn = ({ onClick, selected = false }: NavGiftBtnProps) => {
    return (
        <div className={`${classes['navbar-btn']} bg-primary ${selected ? classes.selected : ''}`} onClick={onClick}>
            <img
                className={classes['navbar-icon']}
                src={giftIcon}
                alt="Menu icon"
            />
            <span className={`ml-sm fw-bold txt-accent-1 ${classes['navbar-btn-text']}`}>Lời chúc</span>
        </div>
    )
}