import '../styles/Button.scss'

export function Button ({type = 'button', name, children}) {
    const className = `button ${name ? 'button_' + name : ''}`
    return (
        <button className={className} type={type}>{children}</button>
    )
}