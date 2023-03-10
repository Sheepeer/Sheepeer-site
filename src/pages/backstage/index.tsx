import useDidMount from "@/hooks/useDidMount"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter()
  useDidMount(() => {
    router.replace('/backstage/dashboard')
  })

  return (
    <></>
  )
}

export default Home