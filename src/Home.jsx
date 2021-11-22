import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/3`);
    }, [])
    return (
        <div>
            Home
        </div>
    )
}
