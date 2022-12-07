import { useState } from "react"

const useFetch = async (url: string) => {
  const [data, setData] = useState<Object>()
  const [error, setError] = useState<Object>()

  try {
    const res = await fetch(url)
    if (res.status === 200) {
      setData(res)
    }else {
      setError(res)
    }
  } catch (error) {
    setError({error})
  }


  return [data, error]
}

export default useFetch