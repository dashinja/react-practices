import homePageStyles from '@/styles/Home.module.css'
import Instructions from '@/components/Instructions/Instructions'

export default function Home() {

  return (
    <div className={homePageStyles.myCenter}>
      <Instructions styles={homePageStyles}/>
    </div>
  )
}
