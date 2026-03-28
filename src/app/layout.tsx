import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Services | Trợ Lý AI Cao Cấp cho Doanh Nghiệp",
  description:
    "Bộ sưu tập AI Agent sang trọng — thiết kế riêng cho doanh nghiệp hiện đại. Nâng tầm vận hành, tối ưu trải nghiệm khách hàng.",
  keywords: [
    "AI Agent",
    "AI cao cấp",
    "trợ lý AI",
    "AI doanh nghiệp",
    "AI Việt Nam",
    "chuyển đổi số",
  ],
  openGraph: {
    title: "AI Agent Services | Trợ Lý AI Cao Cấp cho Doanh Nghiệp",
    description:
      "Bộ sưu tập AI Agent sang trọng — thiết kế riêng cho doanh nghiệp hiện đại.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
