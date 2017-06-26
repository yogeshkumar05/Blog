import React from 'react';
import ReactDOM from 'react-dom';
import BlogMain from './Blog/BlogMain';
import BlogHeader from './Blog/BlogHeader';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.scss'
import {BrowserRouter, Route} from 'react-router-dom';
import PageMain from './Page/PageMain';
import ArticlesContainer from './Blog/ArticlesContainer';
import data from './Blog/data.json';

const container=document.getElementById("container");
ReactDOM.render(
<BrowserRouter>
    <div>
        <Route path="/" component={BlogMain}/>
        <Route path="/page" component={PageMain}/>
        <Route path="/articles" render={()=><ArticlesContainer blogEntries={data}/>}/>
    </div>
</BrowserRouter>, container);