import React from 'react';

export default class NewLike extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">Like</a>
            </span>
        )
    }
}