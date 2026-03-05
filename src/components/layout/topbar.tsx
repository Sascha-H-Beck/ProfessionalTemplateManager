"use client";

import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "@/components/auth/user-menu";
import { SIDEBAR_WIDTH } from "./sidebar";

interface TopbarProps {
  onMenuToggle: () => void;
}

export default function Topbar({ onMenuToggle }: TopbarProps) {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1));

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { md: `${SIDEBAR_WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Breadcrumbs sx={{ flexGrow: 1 }}>
          {segments.map((segment, index) => (
            <Typography
              key={index}
              variant="body2"
              color={index === segments.length - 1 ? "text.primary" : "text.secondary"}
              fontWeight={index === segments.length - 1 ? 600 : 400}
            >
              {segment}
            </Typography>
          ))}
        </Breadcrumbs>

        <Box>
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
