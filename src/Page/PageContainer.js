import React from 'react';
import PageBody from './PageBody';
import CommentsContainer from './CommentsContainer';
import WriteComment from './WriteComment';
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
                <WriteComment/>
                <CommentsContainer index={this.props.index}/>
            </div>
        )
    }
}