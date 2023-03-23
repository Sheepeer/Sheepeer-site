import BsContainer from "@/components/layout/bs-container"
import NoAuth from "@/components/layout/no-auth"
import Pictures from "@/components/pages/backstage/pictures"
import { useSession } from "next-auth/react"

const Index = () => {
  const { data: session } = useSession()
  return (
    ((!!session && session.user?.email === process.env.GITHUB_EMAIL) || process.env.NODE_ENV === 'development')
      ? <BsContainer activeLabel="pictures">
        <Pictures />
      </BsContainer> : <NoAuth />
  )
}

export default Index