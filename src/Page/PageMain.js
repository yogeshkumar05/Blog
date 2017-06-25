import React from 'react';
import PageHeader from './PageHeader';
import PageContainer from './PageContainer';
import {Link} from 'react-router-dom';
import data from '../Blog/data.json'
export default class PageMain extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            displayArticles:false
        }
        this.showArticles=this.showArticles.bind(this);
    }

    showArticles()
    {

    }
    
    render()
    {
        //alert(JSON.stringify(this.props))
        let stringData=this.props.location.pathname;
       // alert(stringIndex.slice(-1))
        
        let pageIndex=stringData.slice(-1);

    console.info(JSON.stringify(this.props.location.pathname))
        return(
            <div className="container">
                <PageHeader index={pageIndex}/>
                <PageContainer index={pageIndex}/>
                <Link to="/articles" >
                back
                </Link>
            </div>
        )
    }
}