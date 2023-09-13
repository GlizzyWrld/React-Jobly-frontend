import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from "./companyDetail";

it('matches the snapshot', function () {
    const {asFragment} = render(<CompanyDetail/>)
    expect(asFragment()).toMatchSnapshot();
});