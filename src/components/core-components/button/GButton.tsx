import React from 'react'

type GButtonProps = {
    label: string
}


const GButton: React.FC<GButtonProps> = ({ label }) => {
    return (
        <button style={{color:'green'}}>{label}</button>
    )
}

export default GButton