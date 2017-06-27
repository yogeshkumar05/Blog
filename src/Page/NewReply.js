import React from 'react';

export default class NewReply extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">Reply</a>
            </span>
        )
    }
}