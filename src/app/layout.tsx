import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Services | Giải pháp AI cho Doanh nghiệp Việt Nam",
  description:
    "Chuyên cung cấp dịch vụ AI Agent giúp tự động hóa quy trình, nâng cao hiệu suất và chuyển đổi số cho doanh nghiệp truyền thống tại Việt Nam.",
  keywords: [
    "AI Agent",
    "AI Việt Nam",
    "tự động hóa",
    "chuyển đổi số",
    "chatbot AI",
    "AI doanh nghiệp",
  ],
  openGraph: {
    title: "AI Agent Services | Giải pháp AI cho Doanh nghiệp Việt Nam",
    description:
      "Chuyên cung cấp dịch vụ AI Agent giúp tự động hóa quy trình và chuyển đổi số cho doanh nghiệp.",
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
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
