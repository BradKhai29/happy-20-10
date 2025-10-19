import { useState } from 'react'
import classes from "./Navbar.module.css";
import { NavHomeBtn } from './NavHomeBtn'
import { NavGiftBtn } from './NavGiftBtn'
import { NavMusicBtn } from './NavMusicBtn'
import { PageManager, AppPages } from '../../states/CurrentPage';

type NavbarProps = {
    onChange?: () => void;
}

export const Navbar = ({ onChange }: NavbarProps) => {
    const [pageIndex, setPageIndex] = useState(AppPages.HomePage);

    function triggerOnChange() {
        if (onChange != null) {
            onChange();
        }
    }

    function setHomePage() {
        PageManager.setHomePage();
        setPageIndex(PageManager.currentPage);
        triggerOnChange();
    }

    function setGiftPage() {
        PageManager.setGiftPage();
        setPageIndex(PageManager.currentPage);
        triggerOnChange();
    }

    function setMusicPage() {
        PageManager.setMusicPage();
        setPageIndex(PageManager.currentPage);
        triggerOnChange();
    }

    return (
        <section className={`${classes.navbar} bg-accent-1`}>
            <NavHomeBtn onClick={setHomePage} selected={pageIndex == AppPages.HomePage}></NavHomeBtn>
            <NavGiftBtn onClick={setGiftPage} selected={pageIndex == AppPages.GiftPage}></NavGiftBtn>
            <NavMusicBtn onClick={setMusicPage} selected={pageIndex == AppPages.MusicPage}></NavMusicBtn>
        </section>
    )
}