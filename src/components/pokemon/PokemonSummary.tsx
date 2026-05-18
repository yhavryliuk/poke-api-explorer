import { Button, Stack, Typography } from "@mui/material";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface Props {
  page: number;
  total: number;
  showing: number;

  onPrev: () => void;
  onNext: () => void;

  disabled: boolean;
}

export const PokemonSummary = ({
  page,
  total,
  showing,
  onPrev,
  onNext,
  disabled,
}: Props) => {
  const pages = Math.ceil(total / 24);

  return (
    <Stack
      direction="row"
      sx={{ mt: 4, justifyContent: "space-between", alignItems: "center" }}
    >
      <Typography color="text.secondary">
        Showing {showing} of {total} results • page {page}/{pages}
      </Typography>

      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          startIcon={<ChevronLeft />}
          onClick={onPrev}
          disabled={page === 1 || disabled}
        >
          Prev
        </Button>

        <Button
          variant="outlined"
          endIcon={<ChevronRight />}
          onClick={onNext}
          disabled={disabled}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};
