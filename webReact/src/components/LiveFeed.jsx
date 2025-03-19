import { SimpleCarousel } from "./Carousel";
import firstFeed from '../assets/feed1.svg'
import secondFeed from '../assets/feed2.svg'
import thirdFeed from '../assets/feed3.svg'
import fourthFeed from '../assets/feed4.svg'
import { Button } from "./Button"
import '../styles/live-feed.scss'


export function LiveFeed () {

    return(
        <section className="live-feed">
            <div className="container">
                <h2 className="live-feed__title">Живая лента</h2>
                <div className="live-feed__wrap">
                    <SimpleCarousel>
                    <div className="feed-card">
                        <div className="card-img">
                            <img src={firstFeed} alt="value1" />
                        </div>
                        <div className='card-description'>
                            <p>Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года</p>
                        </div>
                        {Button({type: 'button', name: 'move-interview_blue', children: 'Перейти к статье'})}
                    </div>
                    <div className="feed-card">
                        <div className="card-img">
                            <img src={secondFeed} alt="value2" />
                        </div>
                        <div className='card-description'>
                            <p>Изменения 2022 года</p>
                        </div>
                        {Button({type: 'button', name: 'move-interview_blue', children: 'Перейти к статье'})}
                     </div>
                     <div className="feed-card">
                        <div className="card-img">
                            <img src={thirdFeed} alt="value3" />
                        </div>
                        <div className='card-description'>
                            <p>Почему стоит работать программистом в 2022 году</p>
                        </div>
                        {Button({type: 'button', name: 'move-interview_blue', children: 'Перейти к статье'})}
                     </div>
                     <div className="feed-card">
                        <div className="card-img">
                            <img src={fourthFeed} alt="value4" />
                        </div>
                        <div className='card-description'>
                            <p>Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы</p>
                        </div>
                        {Button({type: 'button', name: 'move-interview_blue', children: 'Перейти к статье'})}
                     </div>
                     </SimpleCarousel>
                </div>
            </div>
        </section>
    )
}