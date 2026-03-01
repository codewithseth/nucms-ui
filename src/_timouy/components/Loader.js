import React from 'react'
import { ReactComponent as Loading } from "../../_timouy/assets/svg/loader.svg";

const Loader = () => {
    return (
        <span className='font-semibold text-black'><Loading />loading...</span>
    )
}

export default Loader