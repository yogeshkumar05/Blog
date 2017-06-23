import React from 'react';
import PageBody from './PageBody';
import CommentsContainer from './CommentsContainer';

export default class PageContainer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                PageContainer
                <PageBody/>
                <CommentsContainer/>
            </div>
        )
    }
}