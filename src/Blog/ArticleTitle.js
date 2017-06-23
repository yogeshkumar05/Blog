import React from 'react';

export default class ArticleTitle extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className="articleTitle">
                {this.props.title}
            </div>
        )
    }
}