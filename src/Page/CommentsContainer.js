import React from 'react';
import Comment from './Comment';
import data from '../Blog/data.json';
export default class CommentsContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let comments=data[this.props.index].comments;
        let displayComments=[];
        comments.map((item, index)=>
        {
            displayComments.push(<Comment key={index} data={item}/>)
        })

        return(
            <div>
                <div>Comments:</div>
                {displayComments}
                
            </div>
        )
    }
}