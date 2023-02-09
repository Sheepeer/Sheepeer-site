import { EffectCallback, useEffect } from "react"

const useDidMount = (callback: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, [])
}

export default useDidMount