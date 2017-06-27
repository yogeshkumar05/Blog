import React from 'react';

export default class TotalLikes extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <span className="stats">
                <a href="#">4 Likes</a>
            </span>
        )
    }
}