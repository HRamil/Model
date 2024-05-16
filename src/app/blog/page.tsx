import Image from 'next/image'

//style
import './blogPage.scss'

//image
import banner from '@/images/blogListBanner.jpg'
import BlogComponent from '@/components/blogComponent'

export default function page() {
    return (
        <div className='blogPage'>
            <div className='banner'>
                <h1>
                    Blog
                </h1>
                <div className='image'>
                    <Image src={banner} alt='blog image' />
                </div>
            </div>

            <div className='container'>
                <BlogComponent />
            </div>
        </div>
    )
}