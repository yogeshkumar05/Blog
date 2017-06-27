import React from 'react';

export default class TotalViews extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">10 Views</a>
            </span>
        )
    }
}