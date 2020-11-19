import React from 'react';
import {Spinner} from "../styles/LoadingStyledComponents";

const Loading = () => {
    return(
        <Spinner>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Spinner>
    )
}
export default Loading;
