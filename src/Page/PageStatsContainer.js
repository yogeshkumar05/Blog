import React from 'react';
import TotalLikes from './TotalLikes';
import TotalComments from './TotalComments';
import TotalShares from './TotalShares';
import TotalViews from './TotalViews';
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
                <TotalLikes/>
                <TotalComments/>
                <TotalShares/>
                <TotalViews/>
               
            </div>
        )
    }
}