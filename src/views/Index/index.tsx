import { ReactElement } from 'react'
import { Link } from "react-router-dom"



export default (): ReactElement => {
    return (
        <ul>
            <li>
                <Link to="/transfer" style={{color: '#fff'}}>Transfer</Link>
            </li>
            <li>
                <Link to="/home" style={{color: '#fff'}}>Home</Link>
            </li>
        </ul>
    )
}
