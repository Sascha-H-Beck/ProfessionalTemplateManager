"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        {submitted ? (
          <Alert severity="success">
            Thank you for your message. We will get back to you shortly.
          </Alert>
        ) : (
          <Stack component="form" onSubmit={handleSubmit} spacing={3}>
            <TextField label="Name" required fullWidth />
            <TextField label="Email" type="email" required fullWidth />
            <TextField
              label="Message"
              required
              fullWidth
              multiline
              rows={5}
            />
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
