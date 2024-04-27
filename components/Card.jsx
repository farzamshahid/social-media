import React from 'react'

const Card = ({ children, noPadding }) => {
    let classes = "bg-white shadow-md  p-4 mb-5 bg-white  rounded-md  shadow-gray-300 "
    if (noPadding) {
        classes += 'p-4'
    }
    return (
        <div className={classes}>{children}</div>
    )
}

export default Card