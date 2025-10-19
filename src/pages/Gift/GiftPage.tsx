type GiftPageProps = {
    isSelected?: boolean
}

export const GiftPage = ({ isSelected = false }: GiftPageProps) => {
    console.log("Gift page ");


    return (
        <section id="gift-page" className={isSelected ? '' : 'd-none'}>
            GiftPage
        </section>
    )
}