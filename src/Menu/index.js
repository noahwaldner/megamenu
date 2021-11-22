import React, { useEffect, useState } from 'react'
import './Menu.css'
import Menu from './MenuUI.jsx'

export default function MenuContainer({ active, routeData }) {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <>
            {
                !menuVisible ?
                    <button className="menu-toggle" onClick={() => { setMenuVisible(true) }} >Open</button>
                    :
                    <Menu setMenuVisible={setMenuVisible} active={active} routeData={routeData} />
            }
        </>
    )
}
