import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./companyCard";

it('matches the snapshot', function () {
    const {asFragment} = render(<CompanyCard/>)
    expect(asFragment()).toMatchSnapshot();
});