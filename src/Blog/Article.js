import React from 'react';
import ArticlePreview from './ArticlePreview';
import ArticleTitle from './ArticleTitle';
import ArticleTime from './ArticleTime';
import ArticleAuthor from './ArticleAuthor';
import {Link} from 'react-router-dom';

export default class Article extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showDetails:false
        }
    }
    
    
    render()
    {    
        return(
            <Link to="/page" params={{data:this.props.entry}}>
            <div className="col-sm-5 col-md-5 col-lg-5 article"> 
                <ArticleTitle title={this.props.entry.title}/>
                <ArticlePreview preview={this.props.entry.content}/>
                <ArticleAuthor author={this.props.entry.author}/>
                <ArticleTime timestamp={this.props.entry.timestamp}/>
            </div>
            </Link>
        )
    }
}