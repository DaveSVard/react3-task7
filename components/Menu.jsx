import Link from "next/link"
import { useRouter } from "next/router"

export const Menu = () => {
    const router = useRouter()
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li><Link href={"/"} className={router.pathname == "/" ? "active" : ""}>AllProducts</Link></li>
                <li><Link href={"/showCategories"} className={router.pathname == "/showCategories" ? "active" : ""}>AllCategories</Link></li>
            </ul>
        </nav>
    )
}