import './styles/app.scss'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Information } from './components/Information'
import { Values } from './components/Values'
import { Infrastructure } from './components/Infrastructure'
import { LiveFeed } from './components/LiveFeed'
import { SignUpPractice } from './components/SignUpPractice'
import { Answers } from './components/Answers'
import { InterviewForm } from './components/Form'

export function App() {
    return (
        <>
            <Header />
            <Main />
            <Information />
            <Values />
            <Infrastructure />
            <LiveFeed />
            <SignUpPractice />
            <Answers />
            <InterviewForm />
        </>
    )
}