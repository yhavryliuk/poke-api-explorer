import { Box, Button, Card, Chip, Typography, styled } from "@mui/material";
import { theme } from "../../../theme";

export const StyledCard = styled(Card)({
  padding: 16,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none",
  cursor: "pointer",
  transition: "0.2s",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: 2,
  },
});

export const PokemonId = styled(Typography)({
  fontWeight: 600,
});

export const TypeChip = styled(Chip)<{
  primarytype?: boolean;
}>(({ theme, primarytype }) => ({
  borderRadius: theme.spacing(2),
  fontWeight: 600,
  backgroundColor: primarytype
    ? theme.palette.text.primary
    : theme.palette.grey[300],
  color: primarytype
    ? theme.palette.background.paper
    : theme.palette.text.primary,
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  aspectRatio: "2 / 1",
  width: "100%",
  overflow: "hidden",
}));

export const PokemonImage = styled("img")({
  width: "72%",
  height: "72%",
  objectFit: "contain",
});

export const PokemonName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginTop: theme.spacing(2),
  textTransform: "capitalize",
}));

export const PokemonMeta = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));

export const LikeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(1),
  textTransform: "none",
  fontWeight: 600,
  alignSelf: "flex-start",
}));
