import React from 'react'
import TitleHeader from './TitleHeader';

const InvalidPage = () => {
    return (
        <div>
            <TitleHeader />
            <div className="message-404">
                <h1>404 - PAGE NOT FOUND</h1>
            </div>
        </div>
    )
} 

export default InvalidPage
