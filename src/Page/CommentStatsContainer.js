import React from 'react';
import NewLike from './NewLike';
import NewReply from './NewReply';
import TotalLikes from './TotalLikes';
export default class PageStatsContainer extends React.Component
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
                <NewReply/>
                <TotalLikes/>
               
            </div>
        )
    }
}