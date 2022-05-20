import { ReactElement, useState } from 'react'

import { transferApi } from '@api/index'
// import api from '@api/Transfer'

import './index.scss'


export default (): ReactElement => {

  // address
  const [address, setAddress] = useState<string>('')
  // amount
  const [amount, setAmount] = useState<string>('')

  /**
   * clear data
   */
  const clearData = () => {
    setAddress('')
    setAmount('')
  }

  /**
   * submit
   */
  const handleSubmit = () => {
    // address and amount are required
    if (!address || !amount) return
    // split string
    const addresses = address.split(',')
    // promise Array
    const promises = addresses.map(address => transferApi.setAmount(address, amount))
    // get response
    Promise.all(promises).then(values => {
      alert(JSON.stringify(values))
      clearData()
    })

  }

  return (
    <div className='transfer_view'>
      <h1>Transfer</h1>
      <h6>Transfer your Token here</h6>
      <p>Address</p>
      <input type="text" placeholder='Recipient Address' value={address} onChange={(e) => setAddress(e.target.value)} />
      <p>Token Amount</p>
      <input type="number" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <span>Make sure you have IYO token.</span>
      <button onClick={handleSubmit}>Transfer</button>
    </div>
  )
}
