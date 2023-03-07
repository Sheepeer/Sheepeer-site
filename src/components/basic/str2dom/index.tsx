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
      const img = document.getElementById(domId)?.firstChild
      if (img) {
        (img as any).style.height = '150px';
        (img as any).style.width = '180px'
      }
    }
  }, [str, domId])

  return (
    <div id={domId}></div>
  )
}

export default Str2Dom