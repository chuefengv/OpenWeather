import React from 'react'

export default function OpeningPage({setFirstSearch}) {
    return (
        <div onClick={()=>setFirstSearch(true)}>
            Opening
        </div>
    )
}
