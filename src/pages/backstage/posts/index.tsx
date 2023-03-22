import BsContainer from "@/components/layout/bs-container"
import NoAuth from "@/components/layout/no-auth"
import Posts from "@/components/pages/backstage/posts"
import { useSession } from "next-auth/react"

const Index = () => {
  const { data: session } = useSession()
  return (
    !!session && session.user?.email === process.env.GITHUB_EMAIL
      ? <BsContainer activeLabel="posts">
        <Posts />
      </BsContainer> : <NoAuth />
  )
}

export default Index