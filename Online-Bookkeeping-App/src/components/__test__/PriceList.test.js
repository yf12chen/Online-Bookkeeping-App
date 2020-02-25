import React from "react";
import { shallow } from "enzyme";
import PriceList from "../PriceList";
import { items, categories } from "../../containers/Home";

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid];
  return item;
});

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
};
let wrapper;
describe("test PriceList component", () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props} />);
  });
  //jest snapchat
  //it("Rendered component should match snapshot", () => {
  //  expect(wrapper).toMatchSnapshot();
  //});
  it("Rendered list should have correct length", () => {
    expect(wrapper.find(".list-group-item").length).toEqual(
      itemsWithCategory.length
    );
  });
  it("Rendered list should have correct icon and price", () => {
    const iconList = wrapper
      .find(".list-group-item")
      .first()
      .find("ion-icon");
    expect(iconList.length).toEqual(3);
    expect(iconList.first().props().name).toEqual(
      itemsWithCategory[0].category.iconName
    );
  });
  it("should trigger the correct function callback", () => {
    const firstItem = wrapper.find(".list-group-item").first();
    firstItem
      .find("a")
      .first()
      .simulate("click");
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0]);
    firstItem
      .find("a")
      .at(1)
      .simulate("click");
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0]);
  });
});
