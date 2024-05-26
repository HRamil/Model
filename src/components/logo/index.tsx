import Image from 'next/image'

//style
import './logo.scss'

//image
import logo from '@/images/newFaceLogo.webp'

export default function Logo() {
    return (
        <Image className='logo' src={logo} alt='New Face Logo' />
    )
}