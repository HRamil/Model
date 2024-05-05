import Link from 'next/link'

//style
import './headerLink.scss'

export default function HeaderLink(props: any) {
    return (
        <div className='headerLink'>
            <Link href={props.data.slug}>
                {props.data.title}
            </Link>
            {props.data.hasOwnProperty('sub') ?
                <div>
                    {props.data.sub.map((sub: any) => {
                        return (
                            <Link href={sub.slug}>
                                {sub.title}
                            </Link>
                        )
                    }
                    )}
                </div>
                : null
            }
        </div>
    )
}