"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

const FOOTER_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Imprint", href: "/imprint" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} PDEV. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {FOOTER_LINKS.map((link) => (
              <MuiLink
                key={link.href}
                component={Link}
                href={link.href}
                variant="body2"
                color="text.secondary"
                underline="hover"
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
