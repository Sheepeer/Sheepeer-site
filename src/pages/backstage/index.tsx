import { useRouter } from "next/router"
import { useEffect } from "react"
import BackstageHome from "../../components/pages/backstage/home"

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/backstage/dashboard')
  }, [])
  
  return (
    <BackstageHome/>
  )
}

export default Home