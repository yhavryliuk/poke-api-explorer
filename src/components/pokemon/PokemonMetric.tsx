import { Stack, Typography } from "@mui/material";

interface Props {
  label: string;

  value: string | number;
}

export const PokemonMetric = ({ label, value }: Props) => {
  return (
    <Stack spacing={0.5}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>

      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
};
