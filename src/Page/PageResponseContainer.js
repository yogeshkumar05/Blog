import React from 'react';
import NewLike from './NewLike';
import NewComment from './NewComment';
import NewShare from './NewShare';
export default class PageResponseContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                <NewLike/>
                <NewComment/>
                <NewShare/>
               
            </div>
        )
    }
}