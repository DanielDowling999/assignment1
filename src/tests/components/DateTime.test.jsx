import React from "react";
import { useState, useEffect } from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DateTime from "../../components/DateTime";
import "@testing-library/jest-dom/extend-expect";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

test("Renders DateTime correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <DateTime />
    </BrowserRouter>
  );

  const d = new Date();
  const wordDay = DAYS[d.getDay()];
  expect(container).toHaveTextContent(d.getDate());
  expect(container).toHaveTextContent(d.getMonth());
  expect(container).toHaveTextContent(d.getFullYear());
  expect(container).toHaveTextContent(wordDay);
});