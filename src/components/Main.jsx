import { Button } from "./Button"
import '../styles/main.scss'

export function Main () {
    return (
        <section className="main">
            <div className="container">
             <div className="main__wrap">
               <h1 className="main__title">Добро пожаловать в ГЭНДАЛЬФ!</h1>
               <p className="main__description">Мы готовы поделиться секретом, почему любим компанию,
                в которой работаем. Если тебе будут близки наши ценности и идеи, то смело записывайся на собеседование!</p>
               <div className="button-wrap">
                {Button({type: 'button', name: 'about-us', children: 'Узнать больше'})}
                {Button({type: 'button', name: 'move-interview', children: 'Записаться на собеседование'})}
               </div>
             </div>
           </div>
        </section>
    )
}