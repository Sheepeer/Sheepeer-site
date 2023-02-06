import axios from "axios"

const fetcher = (params: { url: string, query?: { [key: string]: any } }) => {
  const {url, query} = params
  return axios.get(url, {
    params: query
  }).then(res => res.data)
}

export default fetcher