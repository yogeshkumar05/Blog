import React from 'react';
import Response from './Response';
export default class ResponseContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                ResponseContainer
                <Response/>
            </div>
        )
    }
}