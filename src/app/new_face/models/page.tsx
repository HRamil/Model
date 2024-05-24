'use client'

import React, { useState } from 'react'
import PersonComponent from '@/components/personComponent'
import FilterComponent from '@/components/filterComponent'

//style
import './models.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function page() {
  const eyeColors = [
    'all',
    'red',
    'green',
    'blue',
    'black',
    'brown'
  ]
  const models = useSelector((state: RootState) => state.models.data)

  const [eye, setEye] = useState('all')
  return (
    <div className='models'>
      <div className='container'>
        <div className="filters">
          <FilterComponent value={eye} setValue={setEye} data={eyeColors} />
        </div>
        <div className="list">
          {models !== null ?
            models.map((model: any) => {
              return (
                <PersonComponent data={model} />
              )
            })
            : null}
        </div>
      </div>
    </div>
  )
}