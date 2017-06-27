import React from 'react';

export default class NewShare extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">Share</a>
            </span>
        )
    }
}