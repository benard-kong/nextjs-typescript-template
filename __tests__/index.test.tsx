import React from "react";
import TestRenderer from "react-test-renderer";
import Index from "../pages/index";

it("renders", () => {
  const tree = TestRenderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
