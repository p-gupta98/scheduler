import React from "react";

import { render, cleanup } from "@testing-library/react";
import { act } from 'react-dom/test-utils';

import Application from "components/Application";

afterEach(cleanup);

it("defaults to Monday and changes the schedule when a new day is selected", () => {
   
  const { findByText } = render(<Application />);
  findByText("Monday");
  
});
