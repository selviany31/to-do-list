import React from 'react'
import '../Styles/Card.css'

const Card = ({ styleName, children }) => {
    return (
        <div className={styleName}>
            {children}
        </div>
    )
}

export default Card