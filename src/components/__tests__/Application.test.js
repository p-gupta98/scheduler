import React from "react";

import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);



it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { queryByText, findByText } = render(<Application />);

  return findByText("Monday").then(() => {
    fireEvent.click(queryByText("Tuesday"));
    expect(queryByText("Leopold Silvers")).toBeInTheDocument();
  });
});


it("loads data, books an interview and reduces the spots remaining for the first day by 1", () => {

});