import React from 'react'
import musicIcon from "../../assets/svg/song.svg";
import classes from "./Navbar.module.css";

type NavMusicBtnProps = {
    link: string,
    selected?: boolean
};

export const NavMusicBtn = ({ link = null, selected = false }: NavMusicBtnProps) => {
    return (
        <div className={`${classes['navbar-btn']} bg-primary ${selected ? classes.selected : ''}`}>
            <img
                className={classes['navbar-icon']}
                src={musicIcon}
                alt="Menu icon"
            />
            <span className={`ml-sm fw-bold txt-accent-1 txt-md ${classes['navbar-btn-text']}`}>Nhạc 20/10</span>
        </div>
    )
}