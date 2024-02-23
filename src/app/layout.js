import { Inter, Poppins, Raleway, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/pages/shared/NavBar/NavBar";
import Footer from "@/pages/shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Satisfy_Sphere",
  description: "Satisfy_Sphere",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav>
          <NavBar />
        </nav>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
