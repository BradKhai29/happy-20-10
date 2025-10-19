type MusicPageProps = {
    isSelected?: boolean
}

export const MusicPage = ({ isSelected = false }: MusicPageProps) => {
    console.log("Music page ");

    return (
        <section id="music-page" className={isSelected ? '' : 'd-none'}>
            MusicPage
        </section>
    )
}