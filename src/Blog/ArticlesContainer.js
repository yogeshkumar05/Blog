import React from 'react';
import Article from './Article';
import PageMain from '../Page/PageMain';
export default class ArticlesContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showPage:false
        }

       this.showPage=this.showPage.bind(this);
        //console.log(JSON.stringify(this.props));
    }

    showPage(index)
    {
       // alert("showPage"+index);
        this.setState({showPage:true});
    }
    
    render()
    {
        var displayArticlePage;
        var displayBlogPage;
    //dont display the portlet if screen is minimized, else display
    if (this.state.showPage===true) {
      displayArticlePage = { display: "none" };
        var displayBlogPage;
      displayBlogPage ={display:"none"}
    }
    else {
      displayArticlePage = { display: "block" };
      displayBlogPage ={display:"none"}
    }
        
        let blogEntries=this.props.blogEntries;
        let displayArticles=[];

        blogEntries.map((item, index)=>
        {
            displayArticles.push(<Article key={index} entry={item} showPage={this.showPage}/>)
        })
        return(
            <div>
            <div style={displayArticlePage} className="articlesContainer">
                {displayArticles}
            </div>
            <div style={displayBlogPage}>
            </div>
            </div>
        )
    }
}