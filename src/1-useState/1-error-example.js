import React from 'react'

function Errorexpamle() {
    let title = 'random title'

    const handleClick = () => {
        title = 'rans'
        console.log(title)
    }
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>Name changer</button>
        </React.Fragment>
    )
}

export default Errorexpamle
