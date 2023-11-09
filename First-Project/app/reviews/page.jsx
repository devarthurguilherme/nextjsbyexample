import Link from "next/link";

import Heading from "@/components/Heading";

const Links = [
    {id: 1, path: "/reviews/hollow-knight", description: "Hollow Knight", image: "/images/stardew-valley.jpg"}
]

export default function ReviewsPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul>
                {Links.map((item) => {
                    return(
                        <li key={item.id}>
                            <Link href={item.path}>
                                <img src={item.image} alt="" /> {item.description}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};