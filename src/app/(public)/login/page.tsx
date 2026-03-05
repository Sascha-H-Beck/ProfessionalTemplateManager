import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import LoginButtons from "@/components/auth/login-buttons";

export const metadata: Metadata = {
  title: "Sign In — PDEV",
  description: "Sign in to PDEV with your Google or Microsoft account.",
};

export default function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ py: { xs: 8, md: 12 } }}>
      <Card variant="outlined">
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Typography
            variant="h5"
            fontWeight={700}
            color="primary.main"
            gutterBottom
          >
            PDEV
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Sign In
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Use your Google or Microsoft account to continue.
          </Typography>
          <LoginButtons />
          <Box sx={{ mt: 3 }}>
            <MuiLink
              href="/"
              variant="body2"
              underline="hover"
            >
              Back to Home
            </MuiLink>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
