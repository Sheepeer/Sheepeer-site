import React from "react"

interface ContentValue {
  isHeaderHidden: boolean
  setIsHeaderHidden: (v: boolean) => void
}

export const defaultValue: ContentValue = {
  isHeaderHidden: false,
  setIsHeaderHidden: (v) => { }
}

const MyContext = React.createContext(defaultValue)

export default MyContext