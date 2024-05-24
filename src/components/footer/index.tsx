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

export default function Footer() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(modelsAsync())
    }, [])

    return (
        <footer>
            <div className="container">
                <Logo />
                <div className='links'>
                    <h3>
                        Sosial Şəbəkələr
                    </h3>
                    <div className='sosial-icon'>
                        <Link href={''}>
                            <Image src={fb} alt='facebook' />
                        </Link>
                        <Link href={''}>
                            <Image src={tiktok} alt='facebook' />
                        </Link>
                    </div>
                </div>
                <div className='links'>
                    <h3>
                        Səhifələr
                    </h3>
                    <div className='pages'>
                        <Link href={''}>
                            Model
                        </Link>
                        <Link href={''}>
                            Videoqraf
                        </Link>
                        <Link href={''}>
                            Fotoqraf
                        </Link>
                        <Link href={''}>
                            Oyunçu
                        </Link>
                    </div>
                </div>

                <div className='links'>
                    <h3>
                        Əlaqə məlumatlar
                    </h3>
                </div>
            </div>
        </footer>
    )
}