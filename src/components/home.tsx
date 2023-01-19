import React, { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useCopyToClipboard from './Copy-to-clipboard';

const Home = () => {
    const [isCopied, handleCopy] = useCopyToClipboard(3000);

    const navigate = useNavigate()
    const location = useLocation();
    console.log("LOCATION ::", location);

    function onSubmit() {
        // Submit form results
        navigate("/search?name=test&n=7")
    }

    const code = 'HELLO I AM COPPIED';
    return (
        <Fragment>
            <button onClick={onSubmit}>home</button>
            {/* @ts-ignore */}
            <button onClick={() => handleCopy(code)}>
                {isCopied ? <div>COPIED</div> : <div>COPY</div>}
            </button>
        </Fragment>
    )
}

export default Home;
