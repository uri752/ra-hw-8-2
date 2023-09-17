import React from 'react'
import useJsonFetch from '../functions/useJsonFetch'

export default function Component1() {
    const url = 'http://localhost:7070/data';
    const {loading, data, error} = useJsonFetch(url);
    const content = `Component-1 data: ${loading ? 'Loading...': data}`;
    
    return (
        <div className='m-2 p-2'>{content}</div>
    )
}
