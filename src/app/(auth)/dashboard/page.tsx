"use client";

import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import BusinessIcon from "@mui/icons-material/Business";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Welcome, {session?.user?.name ?? "User"}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Manage your PDF templates and documents from here.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <DescriptionIcon color="primary" />
                <Typography variant="h6">Your Templates</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="primary.main">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Personal templates
              </Typography>
              <Button variant="outlined" size="small" disabled>
                Create Template
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <HistoryIcon color="primary" />
                <Typography variant="h6">Recent Documents</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="primary.main">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Generated documents
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <BusinessIcon color="primary" />
                <Typography variant="h6">Department Templates</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="primary.main">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Shared templates
              </Typography>
              <Button variant="outlined" size="small" disabled>
                Browse
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
