import video from '../assets/video.svg'
import '../styles/infrastructure.scss'

export function Infrastructure () {
    return (
        <section className="infrastructure">
            <div className="container">
                <h1 className="infrastructure__title">Инфраструктура для твоего развития и роста</h1>
                <div className="infrastructure__wrap">
                    <div className="infrastructure__left-wrap">
                       <div className="infrastructure__text">
                        <p>
                        Мы создаем платформу для профессионального развития каждого сотрудника. Главная цель – дать возможность учиться, работать и получать удовольствие от каждой успешной задачи.
                        </p>
                        <p>
                         О возможностях личностного роста в ГЭНДАЛЬФ расскажет руководитель Департамента персонала и карьеры Татьяна Арсенович
                        </p>
                       </div>
                    </div>
                    <div className="infrastructure__right-wrap">
                        <div className="infrastructure__video">
                            <img src={video} alt="video" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}