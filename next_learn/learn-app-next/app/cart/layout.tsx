// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "cart title"
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        cart layout
        {children}
    </div>
  );
}
