import React from 'react';
import ArticleTime from './ArticleAuthor';
export default class ArticleAuthor extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
      
        return(
            <div className="articleAuthor">
               <img src="../../images/author.png"/> {this.props.author}
            </div>
        )
    }
}