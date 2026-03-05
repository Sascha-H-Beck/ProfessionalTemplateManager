"use client";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";
import SvgIcon from "@mui/material/SvgIcon";

function MicrosoftIcon() {
  return (
    <SvgIcon viewBox="0 0 23 23">
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </SvgIcon>
  );
}

export default function LoginButtons() {
  return (
    <Stack spacing={2}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        sx={{ py: 1.5, textTransform: "none", fontSize: "1rem" }}
      >
        Sign in with Google
      </Button>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<MicrosoftIcon />}
        onClick={() =>
          signIn("microsoft-entra-id", { callbackUrl: "/dashboard" })
        }
        sx={{ py: 1.5, textTransform: "none", fontSize: "1rem" }}
      >
        Sign in with Microsoft
      </Button>
    </Stack>
  );
}
