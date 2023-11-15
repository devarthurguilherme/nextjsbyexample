//Components
import NavBar from "../components/NavBar";

//CSS
import "./styles/global.css";

//Google Fonts
import { exo2, orbitron } from "@/app/fonts";

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={ `${exo2.variable} ${orbitron.variable}` }>
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-xs">
                    Game data and images courtesy of {" "}
                    <a 
                        className="text-orange-800 hover:underline"
                        href="https://rawg.io/" 
                        target="_blank"
                    >
                            RAWG.IO
                    </a>
                </footer>
            </body>
        </html>
    );
};
