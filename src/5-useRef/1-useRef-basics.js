import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {

    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
    })
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div ref={divContainer}>hello world</div>
        </>
    )
}
export default UseRefBasics