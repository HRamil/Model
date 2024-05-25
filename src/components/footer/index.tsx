'use client'

import { useAppDispatch } from '@/redux/hook'
import { modelsAsync } from '@/redux/models/models'
import { useEffect } from 'react'
import Logo from '../logo'
import Link from 'next/link'
import Image from 'next/image'

//style
import './footer.scss'

//image
import fb from '@/images/facebook.svg'
import tiktok from '@/images/tiktok.svg'
import phone from '@/images/phone.svg'
import mail from '@/images/mail.svg'
import manzara from '@/images/manzara.jpg'

export default function Footer() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(modelsAsync())
    }, [])

    return (
        <footer>
            <div className="container">
                <div className="aboutUs">
                    <h3>About Us</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\
                    </p>
                    <div>
                        <Image src={phone} alt='phone' />
                        <p>
                            +994 55 555 55 55
                        </p>
                    </div>
                    <div>
                        <Image src={mail} alt='mail' />
                        <p>
                            isa@gmail.com
                        </p>
                    </div>
                </div>
                <div className="sosialNetwork">
                    <h3>Sosial Network</h3>
                    <div>
                        <Image src={fb} alt='facebook' />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div>
                        <Image src={tiktok} alt='tiktok' />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>

                <div className='instagram'>
                    <h3>Instagram</h3>

                    <div>
                        <Image src={manzara} alt='instagram'/>
                        <Image src={manzara} alt='instagram'/>
                        <Image src={manzara} alt='instagram'/>
                        <Image src={manzara} alt='instagram'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}