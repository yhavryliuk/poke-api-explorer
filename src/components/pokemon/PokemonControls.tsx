import { type SubmitEvent } from "react";

import { Cached, Search, Clear } from "@mui/icons-material";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

interface Props {
  search: string;
  selectedType: string;

  types: string[];

  onSearchChange: (value: string) => void;

  onTypeChange: (value: string) => void;

  onSearch: () => void;
  onReset: () => void;
}

export const PokemonControls = ({
  search,
  selectedType,
  types,
  onSearchChange,
  onTypeChange,
  onSearch,
  onReset,
}: Props) => {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={2}
      sx={{
        alignItems: "center",
      }}
    >
      <TextField
        size="small"
        fullWidth
        label="Search by name or ID"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        slotProps={{
          input: {
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => onSearchChange("")}>
                  <Clear fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
      />

      <FormControl
        size="small"
        sx={{
          width: {
            xs: "100%",
            md: 200,
          },
        }}
      >
        <InputLabel>Type</InputLabel>

        <Select
          value={selectedType}
          label="Type"
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>

          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        startIcon={<Search />}
        sx={{
          minWidth: 120,
        }}
      >
        Search
      </Button>

      <Button
        variant="outlined"
        startIcon={<Cached />}
        onClick={onReset}
        sx={{
          minWidth: 110,
        }}
      >
        Reset
      </Button>
    </Stack>
  );
};
