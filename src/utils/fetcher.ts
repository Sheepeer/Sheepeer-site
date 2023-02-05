import axios from "axios"

const fetcher = (url: string, payload?: {[key: string]: any}) => {
  return axios.get(url, {
    params: payload
  }).then(res => res.data)
}

export default fetcher