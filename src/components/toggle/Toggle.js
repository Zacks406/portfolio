import React, { useContext } from 'react'
import { ThemeContext } from '../../Context';
import "../toggle/Toggle.css"

const Toggle = () => {

    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className="t">
            <img src="/images/sun.jpg" alt="" className="t-icon" />
            <img src="/images/moon.png" alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle
