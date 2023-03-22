import React, { ReactNode, useState ,useContext} from "react"

interface HeaderValues {
  isHeaderHidden: boolean
  setIsHeaderHidden: (v: boolean) => void
}

const initHeaderValues: HeaderValues = {
  isHeaderHidden: false,
  setIsHeaderHidden: () => { }
}

const HeaderContext = React.createContext(initHeaderValues)

const HeaderContextProvider = ({ children }: { children: ReactNode }) => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  return (
    <HeaderContext.Provider value={{
      isHeaderHidden, setIsHeaderHidden
    }}>
      {children}
    </HeaderContext.Provider>
  )
}

const useHeaderContent = () => {
  return useContext(HeaderContext)
}

export default HeaderContextProvider
export {
  useHeaderContent
}