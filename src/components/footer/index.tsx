'use client'

import { useAppDispatch } from '@/redux/hook'
import { modelsAsync } from '@/redux/models/models'
import React, { useEffect } from 'react'

export default function Footer() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(modelsAsync())
    }, [])
    
    return (
        <div></div>
    )
}
