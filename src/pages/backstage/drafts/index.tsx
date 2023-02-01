import BsContainer from "@/components/layout/bs-container"
import Drafts from "@/components/pages/backstage/drafts"

const Index = () => {
  return (
    <BsContainer activeLabel="posts">
      <Drafts />
    </BsContainer>
  )
}

export default Index