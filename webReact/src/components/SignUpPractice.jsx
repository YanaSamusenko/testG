import "../styles/SignUpPractice.scss";
import { Button } from "./Button";

export function SignUpPractice() {
    return (
        <section className="sign-up-practice">
            <div className="container">
                    <h1 className="sign-up-practice__title">
                    Ты студент и хочешь устроиться на практику?
                    </h1>
                    <div className="sign-up-practice__wrap">
                       {Button({type: 'button', name: 'about-us', children: 'Оставить заявку'})}
                    </div>
            </div>
        </section>
    );
}