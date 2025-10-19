import React from 'react'
import giftIcon from "../../assets/svg/smile.svg";
import classes from "./Navbar.module.css";

type NavGiftBtnProps = {
    link: string,
    selected?: boolean
};

export const NavGiftBtn = ({ link = null, selected = false }: NavGiftBtnProps) => {
    return (
        <div className={`${classes['navbar-btn']} bg-primary ${selected ? classes.selected : ''}`}>
            <img
                className={classes['navbar-icon']}
                src={giftIcon}
                alt="Menu icon"
            />
            <span className={`ml-sm fw-bold txt-accent-1 txt-md ${classes['navbar-btn-text']}`}>Lời chúc</span>
        </div>
    )
}