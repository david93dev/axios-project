import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-2 bg-gray-800">
        <h2 className="opacity-100 text-4xl font-semibold text-gray-200 hover:text-white">
           <Link to={"/"}>Blog</Link>
        </h2>
        <ul className="flex justify-between intems-center gap-8 text-xl text-gray-200">
            <li>
                <Link 
                to={"/"} 
                className="hover:underline underline-offset-4 hover:text-white">
                Home
                </Link>
            </li>
             <li>
                <Link to={"/new"} 
                className="rounded-2xl p-2 border-2 hover:text-gray-950 hover:bg-gray-200 hover:border-gray-400">
                Novo Post
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header