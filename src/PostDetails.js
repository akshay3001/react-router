import React from 'react'
import { useParams } from 'react-router-dom';

function PostDetails() {
    // useParam hook
    const param = useParams();
    return (
        <div>
            {param.id}
        </div>
    )
}

export default PostDetails
