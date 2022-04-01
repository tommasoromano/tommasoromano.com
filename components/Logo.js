import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
        <a className="my-2 flex items-center space-x-1 text-gray-800 dark:text-gray-100">
          <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">Tommaso Romano</span>
        </a>      
        </Link>
    )
}

export default Logo;
