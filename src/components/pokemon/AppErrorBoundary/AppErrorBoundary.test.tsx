import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AppErrorBoundary } from "./AppErrorBoundary";

const ThrowError = () => {
  throw new Error("Test error");
};

describe("AppErrorBoundary", () => {
  it("renders children when no error occurs", () => {
    render(
      <AppErrorBoundary>
        <div>Healthy component</div>
      </AppErrorBoundary>,
    );

    expect(screen.getByText("Healthy component")).toBeInTheDocument();
  });

  it("renders fallback UI when child throws", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <AppErrorBoundary>
        <ThrowError />
      </AppErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    expect(
      screen.getByText("Unexpected runtime error occurred."),
    ).toBeInTheDocument();
  });

  it("resets error state on retry", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <AppErrorBoundary>
        <ThrowError />
      </AppErrorBoundary>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /try again/i,
      }),
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
