import React from 'react';
import data from '../Blog/data.json';
export default class PageBody extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let pageData=data[this.props.index].content;
        return(
            <div>
                {pageData}  
            </div>
        )
    }
}