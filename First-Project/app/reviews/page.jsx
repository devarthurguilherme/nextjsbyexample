import Link from "next/link";

import Heading from "@/components/Heading";

const Links = [
    {
        id: 1, 
        path: "/reviews/hollow-knight", 
        description: "Hollow Knight", 
        image: "/images/hollow-knight.jpg",
    },
    {
        id: 2, 
        path: "/reviews/stardew-valley", 
        description: "Stardew Valley", 
        image: "/images/stardew-valley.jpg"
    }
]

export default function ReviewsPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-col gap-3">
                {Links.map((item) => {
                    return(
                        <li
                            className="bg-white border rounded shadow w-80 hover:shadow-xl" 
                            key={item.id}
                        >
                            <Link href={item.path}>
                                <img 
                                    src={item.image} 
                                    alt={item.description}
                                    width="320"
                                    height="180"
                                    className="mb-2 rounded-t"
                                    
                                />
                                <h2 className="py-1 text-center">
                                    {item.description}
                                </h2>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};