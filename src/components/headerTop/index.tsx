import Image from 'next/image'
import Link from 'next/link'

//style
import './headerTop.scss'

//image
import instagram from '@/images/instagram.svg'
import facebook from '@/images/facebook.svg'
import youtube from '@/images/youtube.svg'
import whatsapp from '@/images/whatsapp.svg'
import mail from '@/images/mail.svg'
import phone from '@/images/phone.svg'
import clock from '@/images/clock.svg'

export default function HeaderTop() {
    return (
        <div className='headerTop'>
            <div className="container">
                <div>
                    <Link href={'/'}>
                        <Image src={instagram} alt={'instagram'} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={facebook} alt={'facebook'} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={youtube} alt={'youtube'} />

                    </Link>
                    <Link href={'/'}>
                        <Image src={whatsapp} alt={'whatsapp'} />
                    </Link>
                </div>

                <div>
                    <Link href={'/'}>
                        <Image src={mail} alt={'mail'} />
                        <p>
                            help.newface@gmail.com
                        </p>
                    </Link>
                    <div className='line'></div>
                    <Link href={'/'}>
                        <Image src={phone} alt={'phone'} />
                        <p>
                            +994 10 515 20 20
                        </p>
                    </Link>
                    <div className='line'></div>
                    <Link href={'/'}>
                        <Image src={clock} alt={'clock'} />
                        <p>
                            B.e - Şənbə, 9:00-18:00
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}