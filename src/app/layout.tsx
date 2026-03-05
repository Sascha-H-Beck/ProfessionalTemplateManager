import type { Metadata } from "next";
import ThemeRegistry from "@/theme/theme-registry";
import AuthSessionProvider from "@/components/providers/session-provider";

export const metadata: Metadata = {
  title: "PDEV — PDF Template Management",
  description:
    "Design, manage, and generate PDF templates with version control and department-based access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
