// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
import type { AppProps } from 'next/app';
import { AuthProvider } from './context/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ここに設置して全体の親にします
    <AuthProvider>
      <Component {...pageProps} /> // 各ページのコンポーネントがここに入ります
    </AuthProvider>
  );
}

export default MyApp;