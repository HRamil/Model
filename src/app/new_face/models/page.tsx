'use client'

import { useState } from 'react'
import PersonComponent from '@/components/personComponent'
import FilterComponent from '@/components/filterComponent'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

//style
import './models.scss'

export default function page() {
  const models = useSelector((state: RootState) => state.models.data)

  const eyeColors = models !== null ? ["All", ...(models.map((model: any) => model.eye_color))] : null;
  const hairColors = models !== null ? ["All", ...(models.map((model: any) => model.hair_color))] : null;
  const shoeSizes = models !== null ? ["All", ...(models.map((model: any) => model.shoe_size))] : null;

  const [hair, sethair] = useState('All')
  const [eye, setEye] = useState('All')
  const [shoe, setShoe] = useState('All')

  return (
    <div className='models'>
      <div className='container'>
        <div className="filters">
          <FilterComponent value={hair} setValue={sethair} data={hairColors} />
          <FilterComponent value={eye} setValue={setEye} data={eyeColors} />
          <FilterComponent value={shoe} setValue={setShoe} data={shoeSizes} />
        </div>
        <div className="list">
        {models !== null ?
            models.map((model: any, index: number) => {
              if ((eye === 'All' || model.eye_color === eye) && (hair === 'All' || model.hair_color === hair) && (shoe === 'All' || model.shoe_size === shoe)) {
                return <PersonComponent key={index} data={model} />;
              }
              return null;
            })
            : null}
        </div>
      </div>
    </div>
  )
}