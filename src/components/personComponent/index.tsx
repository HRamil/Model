import Image from 'next/image'
import Link from 'next/link'

//style
import './personComponent.scss'

//image
import img from '@/images/342132 KÜÇÜK.jpg'

export default function PersonComponent(props: any) {
    return (
        <Link href={''} className='personComponent'>
            <div className='image'>
                <Image src={img} alt='' />
            </div>
            <h3>
                {props.data.name} {props.data.surname}
            </h3>
        </Link>
    )
}