import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        // abortController use to stop the fetch,
        // we associate abortController with fetch when frequently move to other component
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    setIsPending(false)
                    setdata(data)
                    setError(null)
                }).catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch Aborted')
                    }
                    else {
                        setIsPending(false)
                        setError(err.message)
                    }
                 
                });
        }, 1000);

        return () => abortCont.abort();
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;
