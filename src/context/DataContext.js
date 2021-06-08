import React , {useState, createContext, Children} from "react"

export const DataContext = createContext()


export const DataProvider = ({children}) => {

  const [data, setData] = useState({
    user: "yasniel",
    age: 26
  })

  return (
    <DataContext.Provider value={{data, setData}}>
        {children}
    </DataContext.Provider>
  )
}
