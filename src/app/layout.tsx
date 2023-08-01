import { Source_Serif_Pro, Lato } from "next/font/google";
import cs from "classnames";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

const sourceSerifPro = Source_Serif_Pro({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Home | PLAIT Lab",
  description:
    "PLAIT Lab combines techniques from Programming Languages and Human-Computer Interaction to invent usable programming tools—especially programming tools to help teams working for social good.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cs(sourceSerifPro.className, lato.className)}>
        <div className="flex min-h-screen w-full flex-col">
          <div
            className="sticky top-0 z-10 border-b border-b-slate-200 shadow-sm backdrop-blur"
            style={{ background: "rgba(255, 255, 255, 0.5)" }}
          >
            <Header />
          </div>
          <div className="mx-auto max-w-screen-md grow">{children}</div>
          <div className="border-t border-t-slate-200 shadow-sm">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
