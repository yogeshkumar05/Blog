import React from 'react';

export default class TotalShares extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">3 Shares</a>
            </span>
        )
    }
}