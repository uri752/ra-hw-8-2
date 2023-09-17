import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts={}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();
    let isError = false;

    useEffect( ()=> {                
        fetch(url, {...opts})                        
            .then( res => {
                isError = res.status !== 200
                return res.json();
            } )
            .then( (data) => {                                            
                if (isError) {
                    setError(data.status)        
                } else if (!data) {
                    setError('Error - empty data!');                                                              
                } else {
                    setData(data.status);
                }
               })
            .catch( (error) => {
                setError(error.message)
            })
            .finally( () => setLoading(false));
        }, []);
        return {data, loading, error};
}