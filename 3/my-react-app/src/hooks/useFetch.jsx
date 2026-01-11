import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchUser = async()=>{
        try {
            setLoading(true)
            setError("")
            const res = await fetch(`${url}`)
            if (!res.ok) throw new error("Failed to fetch")
            const response = await res.json()
            console.log({response})
            setData(response)
        } catch (err) {
            setError(err.message)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUser()
    },[url])
  return {data, loading, error}
}

export default useFetch