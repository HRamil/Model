import Image from 'next/image'

//style
import './blogComponent.scss'

//image
import img from '@/images/Kayıt.jpg'

export default function BlogComponent() {
  return (
    <div className='blogComponent'>
      <div className='image'>
        <Image src={img} alt='' />
      </div>
      <div className='text'>
        <h2>
          Mayadroom Ajans ile Başrol Oyunculuğu Hayal Değil!
        </h2>
        <p>
          Oyunculuk kariyerine başlarken başrol oyuncusu olmak size imkansız gelebilir. Ya da tam tersi başrolde yer almadığınız sürece başarılı olduğunuzu düşünmeyebilirsiniz. Aslında tek yapmanız gereken hayallerinize, kendinize ve yeteneğinize inanmak. Çünkü bunları yapmak size eninde sonunda hak ettiklerinizi yaşama fırsatı verir. Oyunculuk kariyeri belki de en zorlu kariyerlerden birisidir. Yaşı, zamanı, cinsiyeti ve molası olmayan bu meslekte belirli bir yere gelmek için her zaman çok çalışmalı ve çok emek harcamalısınız.
        </p>
      </div>
    </div>
  )
}