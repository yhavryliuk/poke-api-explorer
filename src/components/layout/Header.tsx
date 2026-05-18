import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar
        sx={{
          py: 2,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          PokeAPI Explorer
        </Typography>

        <Typography variant="body2" color="text.secondary">
          React • MUI • Zustand • TypeScript
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
