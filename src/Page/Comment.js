import React from 'react';
import ResponseContainer from './ResponseContainer';

export default class Comment extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                Comment
                <ResponseContainer/>
            </div>
        )
    }
}