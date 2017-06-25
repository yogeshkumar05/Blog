import React from 'react';
import ResponseContainer from './ResponseContainer';

export default class Comment extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className="comments">
                {this.props.data}
                <ResponseContainer/>
            </div>
        )
    }
}