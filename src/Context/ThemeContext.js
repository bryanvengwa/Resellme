import {createContext, useState} from 'react';
 export const themeContext = createContext({theme : true})

const ThemeContextProvider = ({children, initial=true})=>{
          const [theme , setTheme] = useState(initial)
          const toggleTheme =()=>{
                    setTheme(old=>!old)
          }


return (
          <themeContext.Provider value={{theme , toggleTheme}}>
                    {children}
          </themeContext.Provider>
)

}
export default ThemeContextProvider