import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import BusinessIcon from "@mui/icons-material/Business";

export const metadata: Metadata = {
  title: "PDEV — PDF Template Management",
  description:
    "Design, manage, and generate PDF templates with version control and department-based access.",
};

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            Manage Your PDF Templates with Ease
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Design, version, and generate professional PDFs for invoices,
            contracts, business letters, and more — all in one platform.
          </Typography>
          <Button
            href="/login"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ px: 5, py: 1.5, fontSize: "1.1rem" }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight={600}
          gutterBottom
        >
          Key Features
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
        >
          Everything you need to create and manage professional PDF documents
          across your organization.
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", textAlign: "center", p: 2 }}
            >
              <CardContent>
                <DescriptionIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  Template Designer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create and edit PDF templates with a powerful visual designer.
                  Drag and drop fields, set styles, and preview in real time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", textAlign: "center", p: 2 }}
            >
              <CardContent>
                <HistoryIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  Version Control
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track every change to your templates. Roll back to any
                  previous version and see who made what changes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", textAlign: "center", p: 2 }}
            >
              <CardContent>
                <BusinessIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  Department Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Organize templates by department with role-based access.
                  Invoices, contracts, and letters — each team gets their own
                  space.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: "grey.50", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight={600}
            gutterBottom
          >
            How It Works
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                step: "1",
                title: "Design Your Template",
                description:
                  "Use our visual designer to create your PDF layout with text fields, images, and dynamic data placeholders.",
              },
              {
                step: "2",
                title: "Map Your Data Fields",
                description:
                  "Connect template fields to your data sources. The system automatically maps JSON fields to your template.",
              },
              {
                step: "3",
                title: "Generate PDFs at Scale",
                description:
                  "Generate professional PDFs on demand or in bulk. Every document uses the latest approved template version.",
              },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.step}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h2"
                    color="primary.main"
                    fontWeight={700}
                    sx={{ opacity: 0.3 }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Start Managing Your PDFs
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Join now and streamline your document workflow.
          </Typography>
          <Button
            href="/login"
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 5, py: 1.5 }}
          >
            Get Started Free
          </Button>
        </Container>
      </Box>
    </>
  );
}
