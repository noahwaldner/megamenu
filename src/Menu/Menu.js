import React, { useEffect, useState } from 'react'
import './Menu.css'

export default function Menu({ active, routeData }) {
    const [hoveredItem, setHoveredItem] = useState(active)
    const [othersHidden, setOthersHidden] = useState(true)
    

    const handleRedirect = (item) => {
        setOthersHidden(true)
        setTimeout(() => {
            window.location.href = item.url
        }, 500)
    }

    useEffect(() => {
        setTimeout(() => { setOthersHidden(false) }, 500)
    }, [setOthersHidden])
    return (
            <ul className="menu-container">
                {routeData.map(item => (
                    <li
                        onClick={() => handleRedirect(item)}
                        onMouseEnter={() => { setHoveredItem(item.id) }}
                        onMouseLeave={() => { setHoveredItem(current => current === item.id ? null : current) }}
                        className="menu-item"
                        style={
                            {
                                backgroundImage: `url(${item.image})`,
                                flexGrow: hoveredItem === item.id ? 3 : othersHidden ? 0 : 1
                            }
                        }>
                        <p
                            style={{
                                display: othersHidden && hoveredItem !== item.id ? "none" : "inline-block",
                                opacity: hoveredItem === item.id && !othersHidden ? 1 : 0,
                                transform: hoveredItem === item.id ? "translateY(0)" : "translateY(-100%)"
                            }}
                        >
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
    )
}
