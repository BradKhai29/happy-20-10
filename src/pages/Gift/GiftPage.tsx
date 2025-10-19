import roseIcon from '../../assets/svg/rose.svg';
import { GiftCard } from './GiftCard';

type GiftPageProps = {
    isSelected?: boolean
}

export const GiftPage = ({ isSelected = false }: GiftPageProps) => {
    console.log("Gift page ");

    return (
        <section id="gift-page" className={isSelected ? '' : 'd-none'}>
            <div>
                <p className="txt-accent-2 txt-sm">Những người phụ nữ kiên cường nhà mình</p>
                <div className="d-flex gap-md justify-center align-center">
                    <img src={roseIcon} className='icon-xl' alt="rose-icon" />
                    <img src={roseIcon} className='icon-xl' alt="rose-icon" />
                    <img src={roseIcon} className='icon-xl' alt="rose-icon" />
                    <img src={roseIcon} className='icon-xl' alt="rose-icon" />
                </div>
            </div>
            <div className='mt-lg'>
                <GiftCard></GiftCard>
            </div>
        </section>
    )
}