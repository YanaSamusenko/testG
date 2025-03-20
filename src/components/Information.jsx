import '../styles/info.scss'
import { Button } from "./Button"
import svg from '../assets/info.svg'

export function Information () {
    return (
        <section className="info">
          <div className="container">
            <div className="info__wrap">
              <div className="left-wrap">
                <h2 className="title">О том, чем мы занимаемся</h2>
                <div className="description-info">
                   <p>
                     ГЭНДАЛЬФ – один из крупнейших игроков на рынке информационных технологий, занимающий 4 место среди 7000 партнеров фирмы «1С». У нас есть представительства в 15 городах России, а нашими услугами пользуются 23 000 организаций-клиентов, в числе которых «Базэл Аэро», «Ростсельмаш», UTG. Аэропорт Кольцово и многие другие
                   </p>
                   <p>
                     Мы тщательно подходим к выбору сотрудников, которые становятся частью команды профессионалов.
                   </p>
                   <p>
                     У нас работают специалисты разных областей: программисты, маркетологи, менеджеры, копирайтеры, методисты и другие, чей карьерный рост не ограничен привычными рамками.
                   </p>
                </div>
                <div className="info__wrap-button">
                    {Button({type: 'button', name: 'more-info', children: 'Узнать больше'})}
                    {Button({type: 'button', name: 'move-interview_blue', children: 'Записаться на собеседование'})}
                </div>
            </div>
            <div className="right-wrap">
                <img src={svg} alt="info" />
            </div>
            </div>
            </div>
        </section>
    )
}