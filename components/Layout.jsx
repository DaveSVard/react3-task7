import Link from "next/link"
import { Menu } from "./Menu"

export const Layout = ({children}) => {
    return(
       <div>
            <Menu />
            {children}
       </div>
    )
}