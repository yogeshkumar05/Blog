import React from 'react';

export default class ArticleTime extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className="articleTime">
                {this.props.timestamp}
            </div>
        )
    }
}