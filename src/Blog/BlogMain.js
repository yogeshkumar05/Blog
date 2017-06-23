import React from 'react';
import BlogHeader from './BlogHeader';
import ArticlesContainer from './ArticlesContainer';
import data from './data.json';

export default class BlogMain extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                <div className="container">
                <BlogHeader/>
                </div>
                <hr/>
                <div className="container">
                <ArticlesContainer blogEntries={data}/>
                </div>
            </div>
        )
    }
}