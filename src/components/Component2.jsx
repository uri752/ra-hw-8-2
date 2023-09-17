import React from 'react'
import useJsonFetch from '../functions/useJsonFetch';

export default function Component2() {
  const url = ' http://localhost:7070/error';
  const {loading, data, error} = useJsonFetch(url);
  const content = `Component-2 error: ${loading ? 'Loading...': error}`;

  return (
    <div className='m-2 p-2'>{content}</div>
  )
}
