import { useState } from 'react'
import classes from "./Navbar.module.css";
import { NavHomeBtn } from './NavHomeBtn'
import { NavGiftBtn } from './NavGiftBtn'
import { NavMusicBtn } from './NavMusicBtn'
import { PageManager, AppPages } from '../../states/CurrentPage';

export const Navbar = () => {
    const [pageIndex, setPageIndex] = useState(AppPages.HomePage);

    function setHomePage() {
        PageManager.setHomePage();
        setPageIndex(PageManager.currentPage);
    }

    function setGiftPage() {
        PageManager.setGiftPage();
        setPageIndex(PageManager.currentPage);
    }

    function setMusicPage() {
        PageManager.setMusicPage();
        setPageIndex(PageManager.currentPage);
    }

    return (
        <section className={`${classes.navbar} bg-accent-1`}>
            <NavHomeBtn onClick={setHomePage} selected={pageIndex == AppPages.HomePage}></NavHomeBtn>
            <NavGiftBtn onClick={setGiftPage} selected={pageIndex == AppPages.GiftPage}></NavGiftBtn>
            <NavMusicBtn onClick={setMusicPage} selected={pageIndex == AppPages.MusicPage}></NavMusicBtn>
        </section>
    )
}