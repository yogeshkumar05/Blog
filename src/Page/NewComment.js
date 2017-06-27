import React from 'react';

export default class NewComment extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">Comment</a>
            </span>
        )
    }
}