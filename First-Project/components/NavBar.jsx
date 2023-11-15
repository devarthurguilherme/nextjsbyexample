import Link from "next/link";
export default function NavBar() {
    const MenuItems = [
        { 
            id: 1, 
            link: "/", 
            description: "Indie Gamer", 
            liClassName: "",
            linkClassName: "text-orange-800 hover:underline font-bold font-orbitron" 
        },
        { 
            id: 2, 
            link: "/reviews", 
            description: "Reviews", 
            liClassName: "ml-auto",
            linkClassName: "text-orange-800 hover:underline" 
        },
        { 
            id: 3, 
            link: "/about", 
            description: "About", 
            liClassName: "",
            linkClassName: "text-orange-800 hover:underline" 
        },
    ];

    return (
        <nav>
            <ul className="flex gap-2">
               {
                    MenuItems.map((menuItem) => {
                        return(
                            <li 
                                key={menuItem.id}
                                className={menuItem.liClassName}
                            >
                                <Link 
                                    href={menuItem.link}
                                    className={menuItem.linkClassName}
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