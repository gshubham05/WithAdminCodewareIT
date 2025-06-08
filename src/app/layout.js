import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsappicon from "./Components/Whatsappicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Best Programming, MERN Stack & Internship Institute in Dehradun | CodewareIT Pvt Ltd",
  description:
    "Join CodewareIT Pvt Ltd, the top programming and industrial training institute in Dehradun. Expert training in MERN Stack, Java, Python, PHP, and real-worl",
  keywords: [
    "best computer institute in Dehradun",
    "best python institute in Dehradun",
    "best computer institute in India",
    "best python institute in India",
    "best java institute in India",
    "best java institute in Dehradun",
    "Shubham Goyal",
    "9837218345",
    "www.codewareit.in",
    "best programming institute in Dehradun",
    "best MERN stack institute in Dehradun",
    "best programming institute in India",
    "best MEAN stack institute in Dehradun",
    "best MEAN stack institute in India",
    "best PHP programming institute in Dehradun",
    "best PHP programming institute in India",
    "best full stack development Dehradun",
    "best full stack development in India",
    "Codeware IT Pvt Ltd Dehradun",
    "industrial training in Dehradun",
    "industrial training in India",
    "summer internship in Dehradun",
    "summer internship in India",
  ],
  author: "Shubham Goyal",
  publisher: "Codeware IT Pvt Ltd",
  openGraph: {
    title: "CodewareIT Pvt Ltd - Best Training Institute in Dehradun & India",
    description:
      "Join Codeware IT for the best internship and training programs in Python, Java, MERN, MEAN, PHP & Full Stack Development.",
    url: "https://www.codewareit.in",
    siteName: "Codeware IT Pvt Ltd",
    images: [
      {
        url: "https://www.codewareit.in/og-image.jpg", // Update with your OG image
        width: 1200,
        height: 630,
        alt: "Codeware IT Pvt Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Whatsappicon />
        <Footer />
      </body>
    </html>
  );
}
