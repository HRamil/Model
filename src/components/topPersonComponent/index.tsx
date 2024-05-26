import Image from 'next/image'

//style
import './topPersonComponent.scss'

//image
import img from '@/images/model.png'

export default function TopPersonComponent() {
    return (
        <div className='topPersonComponent'>
            <h3>
                Gozel Gozel
            </h3>

            <div className="image">
                <Image src={img} alt='' />
            </div>
        </div>
    )
}