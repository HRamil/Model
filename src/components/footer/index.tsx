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


export default function Footer() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(modelsAsync())
    }, [dispatch])

    return (
        <footer>
            <div className="container">

            </div>
        </footer>
    )
}
