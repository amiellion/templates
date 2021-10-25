import axios from 'axios'
import { useEffect, useState } from 'react'
import { trackPromise } from 'react-promise-tracker'

const TableFetchData = (url, dataProps) => {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    });
    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        });
        trackPromise(axios.get(url, { params: dataProps })
            .then(response => {
                setRequest({
                    loading: true,
                    data: (response.data.data) ? response.data.data : response.data,
                    error: false
                });
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            }), 'initial')
    }, [url, dataProps])

    return request
}

export default TableFetchData

