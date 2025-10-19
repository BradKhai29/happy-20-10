import homeIcon from "../../assets/svg/home.svg";
import classes from "./Navbar.module.css";

type NavHomeBtnProps = {
    onClick?: () => void,
    selected?: boolean
};

export const NavHomeBtn = ({ onClick, selected = false }: NavHomeBtnProps) => {
    return (
        <div className={`${classes['navbar-btn']} bg-primary ${selected ? classes.selected : ''}`} onClick={onClick}>
            <img
                className={classes['navbar-icon']}
                src={homeIcon}
                alt="Menu icon"
            />
            <span className={`ml-sm fw-bold txt-accent-1 txt-md ${classes['navbar-btn-text']}`}>Gia đình</span>
        </div>
    )
}