import "./globals.css";

export const metadata = {
  title: "YOUR NAME — Personal Portfolio",
  description: "A compact developer portfolio. Visible skills, a restricted profile, and more potential to uncover. Demo personal content.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
