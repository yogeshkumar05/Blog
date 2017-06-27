import React from 'react';

export default class Response extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className="reponse">
                {this.props.reply}
            </div>
        )
    }
}