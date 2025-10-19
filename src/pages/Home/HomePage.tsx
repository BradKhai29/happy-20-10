import homeBgImg from '../../assets/img/home-background.jpg';
import loveIcon from '../../assets/svg/love.svg';
import classes from './HomePage.module.css';

type HomePageProps = {
    isSelected?: boolean
}

export const HomePage = ({ isSelected = false }: HomePageProps) => {
    console.log("Home page");

    return (
        <section id='home-page' className={isSelected ? '' : 'd-none'}>
            {/* Card image wrapper */}
            <div className={classes.wrapper}>
                <div className={classes['bg-img']}>
                    <img className={`${classes.img} img`} src={homeBgImg} alt="" />
                </div>
                <div className={classes['content-card']}>
                    <div className={`${classes['content']} p-lg txt-secondary`}>
                        <h3>Nhân dịp 20 tháng 10</h3>
                        <p>
                            Con có một món quà đặc biệt gửi tặng đến
                            những người phụ nữ thân yêu nhà mình
                        </p>
                    </div>
                </div>
            </div>

            <section className='mt-lg mb-lg'>
                <div className={`${classes['explore-btn']} d-flex bg-accent-2`}>
                    <span className={`${classes['btn-text']} txt-primary`}>Nhà mình cùng khám phá nha</span>
                    <div className={`${classes['love-icon']} bg-primary d-flex`}>
                        <img src={loveIcon} alt="" />
                    </div>
                </div>
            </section>
        </section>
    )
}