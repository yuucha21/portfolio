import Footer from "../src/components/organisms/Footer";
import Header from "../src/components/organisms/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}