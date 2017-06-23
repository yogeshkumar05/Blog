import React from 'react';
import Comment from './Comment';
export default class CommentsContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                CommentsContainer
                <Comment/>
            </div>
        )
    }
}