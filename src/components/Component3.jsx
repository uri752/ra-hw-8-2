import React from 'react'
import useJsonFetch from '../functions/useJsonFetch'

export default function Component3() {
    const url ='http://localhost:7070/loading';
    const {loading, data, error} = useJsonFetch(url);
    const content = `Component-3 loading: ${loading ? 'Loading...': data}`;

    return (
        <div className='m-2 p-2'>{content}</div>
  )
}
