import React from 'react'
import './Bg.css'
// import 'D:/LearnFrontend/MyPortfolioReact/practiisereact/04bgChange/src/index.css'
import { useState } from 'react'

const Bg = () => {
    const [header, setColor] = useState('green')
    // let homeBG = document.getElementById('root');
    // homeBG.style.background = 'red'
    //why can't change backgroundcolor of :root of index.html directly like as in index.css
    return (
            <>
            {/* <div className='header' style={{backgroundColor: bgColor}} > */}
            <div className={header}>
                <nav className='navigation'>
                    <button onClick={() => setColor('headerRed')}>Red</button>
                    <button onClick={() => setColor('headerGreen')}>Green</button>
                    <button onClick={() => setColor('headerDefault')}>Default</button>
                </nav>
            </div>
            </>
    )
}

export default Bg