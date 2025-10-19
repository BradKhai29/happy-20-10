import React from 'react'
import homeBgImg from '../../assets/img/home-background.jpg';
import loveIcon from '../../assets/svg/love.svg';
import classes from './HomePage.module.css';

type Props = {}

export const HomePage = (props: Props) => {
    return (
        <section>
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

            <section className='mt-lg'>
                <div className='d-flex'>
                    <span>Cùng khám phá xem thử</span>
                    <div>
                        <img src={loveIcon} alt="" />
                    </div>
                </div>
            </section>
        </section>
    )
}