import React from 'react';

export default class ArticlePreview extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let preview=this.props.preview;
        preview=preview.slice(0,20);
        return(
            <div className="articlePreview">
                {preview}
            </div>
        )
    }
}