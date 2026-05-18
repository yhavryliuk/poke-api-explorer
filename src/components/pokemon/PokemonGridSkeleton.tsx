import { Grid, Skeleton, Card, CardContent } from "@mui/material";

export const PokemonGridSkeleton = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        mt: 2,
      }}
    >
      {Array.from({
        length: 24,
      }).map((_, i) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          key={i}
        >
          <Card>
            <CardContent>
              <Skeleton height={200} />

              <Skeleton />

              <Skeleton />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
