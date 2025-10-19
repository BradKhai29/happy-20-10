import React from 'react'
import classes from "./Navbar.module.css";
import { NavHomeBtn } from './NavHomeBtn'
import { NavGiftBtn } from './NavGiftBtn'
import { NavMusicBtn } from './NavMusicBtn'

export const Navbar = () => {
    return (
        <section className={`${classes.navbar} bg-accent-1`}>
            <NavHomeBtn link='/' selected={true}></NavHomeBtn>
            <NavGiftBtn link='/' selected={false}></NavGiftBtn>
            <NavMusicBtn link='/' selected={false}></NavMusicBtn>
        </section>
    )
}