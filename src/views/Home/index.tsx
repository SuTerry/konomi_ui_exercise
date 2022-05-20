import { ReactElement, useState, useEffect } from 'react'

import { homeApi } from '@api/index'

import { BaseData } from '@api/Home'

import Card from './Card'
import './index.scss'

export default (): ReactElement => {

  // coin Data
  const [subscription, setSubscription] = useState<BaseData[]>([])

  // current checked id
  const [currentId, setCurrentId] = useState<number>(-1)

  useEffect(() => {
    homeApi.getCoinData().then(res => {
      setSubscription(res)
    })
  }, [])


  return (
    <div className='home_box'>
      {/* icon start */}
      <div className="home_box_icon">
        Oracle
      </div>
      {/* icon end */}

      {/* content start */}
      <div className="home_box_content">
        {subscription.map((sub, i) => <Card key={i} subscription={sub} currentId={currentId} setCurrentId={setCurrentId} />)}
      </div>
      {/* content end */}
    </div>
  )
}
