'use client'

import { useState } from 'react'
import Image from 'next/image'

//style
import './filterComponent.scss'

//image
import down from "@/images/downArrow.svg"

export default function FilterComponent(props: any) {
    const [open, setOpen] = useState(false)

    return (
        <div className='filterComponent'>
            <div className='choosen' onClick={() => {setOpen(!open)}}>
                <div>
                    {props.value}
                </div>
                <Image src={down} alt='down arrow'/>
            </div>
            {open ?
                <div className='options'>
                    {props.data.map((value: any) => {
                        return (
                            <div className='option' onClick={() => { props.setValue(value) }}>
                                {value}
                            </div>
                        )
                    })}
                </div>
                : null}
        </div>
    )
}