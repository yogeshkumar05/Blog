import React from 'react';
import Response from './Response';
export default class ResponseContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let replies=this.props.replies;
        let displayReplies=[];
        replies.map((item, index)=>
        {
            displayReplies.push(<Response reply={item}/>);

        })
        return(
            <div>
                {displayReplies}
            </div>
        )
    }
}