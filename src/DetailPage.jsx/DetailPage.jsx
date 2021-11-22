import React from 'react'
import { useParams } from 'react-router';
import { routeData } from '../routeData'
import './DetailPage.css'

export default function DetailPage() {
    const params = useParams();
    let item = {};
    const items = routeData.filter(item => item.id === parseInt(params.id))
    item = items[0];
    if (items.length === 0) {
        return <div>404</div>
    }
    return (
        <div>
            <img alt={item.text} className="header-image" src={item.image} />
        </div>
    )
}
