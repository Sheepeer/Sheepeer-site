import { useEffect, useRef } from "react"

interface Props {
  str: string
  domId: string
}

const Str2Dom = ({ str, domId }: Props) => {
  let domRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    domRef.current = document.getElementById(domId)
    if (domRef.current) {
      domRef.current.innerHTML = str
    }
  }, [str, domId])
  console.log(domRef)
  return (
    <div id={domId}></div>
  )
}

export default Str2Dom