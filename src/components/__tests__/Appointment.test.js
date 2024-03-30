import React from "react";

import { render, cleanup } from "@testing-library/react";

import Show from "components/Appointment/Show";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Show />);
});
