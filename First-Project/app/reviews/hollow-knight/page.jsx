import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";

export default async function hollowKnight() {
    const text = await readFile("./content/reviews/hollow-knight.md", "4:19")
    return (
        <>
            <Heading>Hollow Knight</Heading>
            <img src="/images/hollow-knight.jpg" alt=""
                width="640" height="360" className="mb-2 rounded"
            />
            <p>This will be the review for Hollow Knight.</p>
        </>
    )
}