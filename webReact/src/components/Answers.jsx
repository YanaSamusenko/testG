import { useState } from "react";
import { AnswersText } from "./AnswersText";
import answers from '../assets/answers.svg'
import '../styles/answers.scss'

export function Answers () {
    const [activeIndex, setActiveIndex] = useState(null)
 

    const questions = [
        {
            question: 'На что нужно обратить внимание на собеседовании?',
            answer: <AnswersText />
        },
        {
            question: 'Как правильно составить резюме?',
            answer: null
        },
        {
            question: 'Возможно ли устроиться без опыта?',
            answer: null
        },
        {
            question: 'Ошибки на собеседовании. Чего нужно избегать?',
            answer: null    
        }
    ]

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="answers">
            <div className="container">
             <div className="answers__wrap">
                <div className="wrap-left">
                    <h2 className="answers__title">Ответы на вопросы</h2>
                    {questions.map((item, index) => (
                        <div key={index} className="answers__item">
                        <div className={`answers__question${activeIndex === index ? '__active' : ''}`} onClick={() => toggleAnswer(index)} >
                            {item.question}
                        </div>
                        {activeIndex === index && (
            <div className="answers__answer">
              {item.answer}
            </div>
          )}
        </div>
                    ))}
                </div>
                <div className="wrap-right">
                    <img src={answers} alt="answers" />
                </div>
             </div>
            </div>
        </section>
    )
}


                           