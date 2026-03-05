import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Imprint — PDEV",
  description: "Legal information and imprint for the PDEV platform.",
};

export default function ImprintPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        Imprint
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Company Information
        </Typography>
        <Typography variant="body1" color="text.secondary">
          PDEV GmbH
          <br />
          Example Street 1
          <br />
          12345 Berlin
          <br />
          Germany
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Represented by
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Managing Director: Max Mustermann
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: info@pdev.example.com
          <br />
          Phone: +49 (0) 30 123456-0
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Register Court
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Amtsgericht Berlin-Charlottenburg
          <br />
          HRB 123456 B
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          VAT Identification Number
        </Typography>
        <Typography variant="body1" color="text.secondary">
          DE 123 456 789
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disclaimer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Despite careful content control, we assume no liability for the
          content of external links. The operators of the linked pages are
          solely responsible for their content. All contents of this website are
          subject to German copyright law. Any reproduction, editing,
          distribution, or any kind of use beyond the limits of copyright
          requires the written consent of the respective author or creator.
        </Typography>
      </Box>
    </Container>
  );
}
