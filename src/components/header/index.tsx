import Logo from "../logo";
import {headerData} from '@/api/headerData'

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