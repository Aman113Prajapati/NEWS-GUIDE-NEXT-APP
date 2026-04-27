import { Suspense } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "News Guide",
  description: "Latest News App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        {children}

        <Footer />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        ></script>

      </body>
    </html>
  );
}