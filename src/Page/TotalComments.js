import React from 'react';

export default class TotalComments extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">2 Comments</a>
            </span>
        )
    }
}