import React from 'react';
import PageBody from './PageBody';
import CommentsContainer from './CommentsContainer';
import WriteComment from './WriteComment';
import PageStatsContainer from './PageStatsContainer';
import PageResponseContainer from './PageResponseContainer';

export default class PageContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                <div className="pagebody">
                        <PageBody index={this.props.index}/>
                </div>
                <PageStatsContainer index={this.props.index}/>
                <PageResponseContainer index={this.props.index}/>
                <WriteComment/>
                <CommentsContainer index={this.props.index}/>
               
            </div>
        )
    }
}