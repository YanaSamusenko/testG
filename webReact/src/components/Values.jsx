import firstValue from '../assets/values/val1.svg'
import secondValue from '../assets/values/val2.svg'
import thirdValue from '../assets/values/val3.svg'
import fourthValue from '../assets/values/val4.svg'
import fifthValue from '../assets/values/val5.svg'
import { SimpleCarousel } from './Carousel'
import '../styles/carousel.scss'



export function Values () {
    return (
        <section className="values">
            <div className="container">
                <h2 className="values__title">Наши ценности скажут о нас больше:</h2>
                <div className="values__wrap">
                 <SimpleCarousel>
                    <div className="values-card">
                        <div className="card-img">
                            <img src={firstValue} alt="value1" />
                        </div>
                        <h3>Быть командой</h3>
                        <div className='card-description'>
                            <p>Готовность вносить вклад в общие цели команды и достигать их.</p>
                        </div>
                    </div>
                    <div className="values-card">
                        <div className="card-img">
                            <img src={secondValue} alt="value2" />
                        </div>
                        <h3>Побеждать и не сдаваться</h3>
                        <div className='card-description'>
                            <p>Быть ориентированным на результат, настойчивым и не сдаваться перед трудностями.</p>
                        </div>
                    </div>
                    <div className="values-card">
                        <div className="card-img">
                            <img src={thirdValue} alt="value3" />
                        </div>
                        <h3>Заботиться о клиентах</h3>
                        <div className='card-description'>
                            <p>Выполнять обещания и интересоваться потребностями своих клиентов.</p>
                        </div>
                    </div>
                    <div className="values-card">
                        <div className="card-img">
                            <img src={fourthValue} alt="value4" />
                        </div>
                        <h3>Быть увлеченным и ответственным</h3>
                        <div className='card-description'>
                            <p>Вкладывать душу в то, что делаешь и получать от работы удовольствие.</p>
                        </div>
                    </div>
                    <div className="values-card">
                        <div className="card-img">
                            <img src={fifthValue} alt="value5" />
                        </div>
                        <h3>Развиваться</h3>
                        <div className='card-description'>
                            <p>Постоянно расти личностно и профессионально для достижения поставленных целей.</p>
                        </div>
                    </div>
                 </SimpleCarousel>
               </div>
             </div>
                    
        </section>
    )
}