import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata = {
  title: "Coast Guard",
  description: "OCEN 1011 Project",
};

export default function RootLayout({ children }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body className="antialiased">
        <video
          className="fixed inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={`${basePath}/town.mp4`} type="video/mp4" />
        </video>
        {children}
      </body>
    </html>
  );
}
