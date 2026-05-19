import { Component, type ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
            p: 4,
          }}
        >
          <Typography variant="h5">Something went wrong</Typography>

          <Typography color="text.secondary">
            Unexpected runtime error occurred.
          </Typography>

          <Button variant="contained" onClick={this.handleReset}>
            Try again
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
