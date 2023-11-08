import Link from "next/link";
export default function NavBar() {
    const MenuItems = [
        { id: 1, link: "/", description: "Home"},
        { id: 2, link: "/reviews", description: "Reviews"},
        { id: 3, link: "/about", description: "About"},
    ];

    return (
        <nav>
            <ul className="flex gap-2">
               {
                    MenuItems.map((menuItem) => {
                        return(
                            <li key={menuItem.id}>
                                <Link 
                                    href={menuItem.link}
                                    className="text-orange-800 hover:underline"
                                > 
                                    {menuItem.description}
                                </Link>
                            </li>
                        )
                    })
               }
            </ul>
        </nav>
    )
}