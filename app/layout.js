import "./globals.css";
import Footer from "@/src/components/organisms/Footer";

export const metadata = {
    title: "Minami's portfolio",
    description: "This is Minami's portfolio website",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen flex flex-col">
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}