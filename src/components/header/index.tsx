import Logo from "../logo";

//style
import './header.scss'

export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo />
            </div>
        </header>
    )
}