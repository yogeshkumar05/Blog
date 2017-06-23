import React from 'react';
import Article from './Article';
export default class ArticlesContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        
        let blogEntries=this.props.blogEntries;
        let displayArticles=[];

        blogEntries.map((item, index)=>
        {
            displayArticles.push(<Article key={index} entry={item}/>)
        })
        return(
            <div className="articlesContainer">
                {displayArticles}
            </div>
        )
    }
}