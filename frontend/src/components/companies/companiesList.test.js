import React from "react";
import { render } from "@testing-library/react";
import CompaniesList from "./companiesList";

it('matches the snapshot', function () {
    const {asFragment} = render(<CompaniesList/>)
    expect(asFragment()).toMatchSnapshot();
});