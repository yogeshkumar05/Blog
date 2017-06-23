import React from 'react';
import PageHeader from './PageHeader';
import PageContainer from './PageContainer';

export default class PageMain extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        //alert(JSON.stringify(this.props))
        return(
            <div>
                PageMain
                {this.props.data}
                <PageHeader/>
                <PageContainer/>
            </div>
        )
    }
}