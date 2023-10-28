import { useState, useEffect } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setdata] = useState();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      setLoading(true)
      asyncFunction().then(result => {
        setdata(result);
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
    }, dependencies);

    return{
        data,
        loading,
        error
    }
}