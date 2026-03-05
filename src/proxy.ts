export { auth as proxy } from "@/lib/auth";

export const config = {
  matcher: ["/(auth)/:path*", "/(admin)/:path*"],
};
