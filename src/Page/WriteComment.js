import React from 'react';

export default class WriteComment extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className="row newComment">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <textarea placeholder="Write New Comment"/>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <button >Submit</button>
                </div>
                
            </div>
        )
    }
}