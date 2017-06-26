import React from 'react';
import data from '../Blog/data.json';
export default class PageHeader extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        
        let title=data[this.props.index].title;
        return(
            <div className="pageHeader">
                {title}
            </div>
        )
    }
}