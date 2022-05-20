import { ReactElement, useState, useEffect } from 'react'

import { homeApi } from '@api/index'

import { BaseData } from '@api/Home'

import Utils from '@utils/index'

import Skeleton from '@components/Skeleton'

import coinLogoImg from '@img/logo.png'

import './index.scss'

export interface CaardProps {
    subscription: BaseData
    currentId: number
    setCurrentId: (id: number) => void
    coinLogo?: string
}


export default ({
    subscription,
    currentId,
    setCurrentId,
    coinLogo = coinLogoImg
}: CaardProps): ReactElement => {

    // coin name
    const [coinName, setCoinName] = useState<string>('')

    // coin price
    const [coinPrice, setCoinPrice] = useState<string>('')


    useEffect(() => {
        // get coin name
        homeApi.getCoinName(subscription.id).then(res => setCoinName(res))

        // get coin price
        homeApi.getCoinPrice(subscription.id).then(res => setCoinPrice(res))
    }, [])

    // set status text
    const cardStatus = subscription.status === 1 ? 'Active'
        : subscription.status === 2 ? 'Suspended' : 'Terminated'

    // get expiry date
    const expiryDate = () => {
        const expiryDate = subscription.createdTimestamp + 3000 * (subscription.leaseEnd + subscription.blockNumber)
        return `End: ${Utils.formatDate(expiryDate)}`
    }

    /**
     * handle card
     */
    const handleSetCurrentId = () => {
        // click cancel status again
        const id = currentId === subscription.id ? -1 : subscription.id
        setCurrentId(id)
    }

    return (
        <div className={`card ${currentId === subscription.id ? 'hover' : ''}`} onClick={handleSetCurrentId}>

            <div className="card_name">
                {
                    coinName ? coinName : <Skeleton />
                }
            </div>

            {/* status start */}
            <div className={`card_status ${cardStatus}`}>
                <div className="card_status_circle"></div>
                {cardStatus}
            </div>
            {/* status end */}

            {/* logo start */}
            <div className="card_logo">
                <img src={coinLogo} alt="" />
            </div>
            {/* logo end */}

            {/* price start */}
            <div className="card_price">
                {
                    coinPrice ? coinPrice : <Skeleton />
                }
            </div>
            {/* price end */}

            {/* expiry start */}
            <div className="card_expiry">
                {expiryDate()}
            </div>
            {/* expiry end */}

        </div>
    )
}