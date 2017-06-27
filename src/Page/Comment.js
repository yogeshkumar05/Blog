import React from 'react';
import CommentStatsContainer from './CommentStatsContainer';
import ResponseContainer from './ResponseContainer';

export default class Comment extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
      //  alert("respo"+JSON.stringify(this.props.data.responses));
        return(
            <div className="comments">
                {this.props.data.comment}
                <div>
                <CommentStatsContainer/>
                </div>
                <ResponseContainer replies={this.props.data.responses}/>
            </div>
        )
    }
}