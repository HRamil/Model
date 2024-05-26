import TopPersonComponent from '@/components/topPersonComponent'

//style
import './topModels.scss'

export default function Page() {
  return (
    <div className='topModels'>
      <div className="container">
        <TopPersonComponent />
        <TopPersonComponent />
        <TopPersonComponent />
        <TopPersonComponent />
        <TopPersonComponent />
      </div>
    </div>
  )
}