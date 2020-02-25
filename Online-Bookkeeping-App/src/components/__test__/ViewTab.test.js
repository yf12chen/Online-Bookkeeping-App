import React from "react";
import { shallow } from "enzyme";
import ViewTab from "../ViewTab";
import { LIST_VIEW } from "../../utilities";

const props = {
  activeTab: LIST_VIEW,
  onTabChange: jest.fn()
};

let wrapper;

describe("test ViewTab component", () => {
  beforeEach(() => {
    wrapper = shallow(<ViewTab {...props} />);
  });

  //jest snapchat
  //it("Rendered component should match snapshot", () => {
  //  expect(wrapper).toMatchSnapshot();
  //});

  it("List View Tab should be rendered", () => {
    let firstTabClassActive = wrapper
      .find(".nav-item")
      .at(0)
      .find("a");
    expect(firstTabClassActive.exists(".active")).toEqual(true);
  });
  it("Chart View Tab should not be rendered", () => {
    let secondTabClassActive = wrapper
      .find(".nav-item")
      .at(1)
      .find("a");
    expect(secondTabClassActive.exists(".active")).toEqual(false);
  });

  it("Clicking should trigger the callback onTabChange from props ", () => {
    let firstTabClassActive = wrapper
      .find(".nav-item")
      .at(0)
      .find("a");
    let secondTabClassActive = wrapper
      .find(".nav-item")
      .at(1)
      .find("a");

    firstTabClassActive.simulate("click", { preventDefault: () => {} });
    expect(props.onTabChange).toHaveBeenCalled();

    secondTabClassActive.simulate("click", { preventDefault: () => {} });
    expect(props.onTabChange).toHaveBeenCalled();
  });
});
