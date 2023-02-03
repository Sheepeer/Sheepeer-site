import { EffectCallback, useEffect } from "react"

const useDidMount = (callback: EffectCallback) => {
  return useEffect(callback, [])
}

export default useDidMount