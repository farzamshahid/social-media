import React from 'react'

export const Avatar = ({ size, url }) => {
    let width = 'w-12'
    if (size === 'lg') {
        width = 'w-24 md:w-36'
    }
    return (
        <div className={`${width} relative`}>
            <div className="rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full" />
                {/*<img src={url} className="w-full"/> */}
            </div></div>
    )
}
