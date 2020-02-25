import React from 'react';
import { mount } from 'enzyme';
import Home, { items, newItem } from '../Home'

import PriceList from "../../components/PriceList";
import ViewTab from "../../components/ViewTab";
import TotalPrice from "../../components/TotalPrice";
import MonthPicker from "../../components/MonthPicker";
import CreateBtn from "../../components/CreateBtn";

import {
    LIST_VIEW,
    CHART_VIEW,
    TYPE_INCOME,
    TYPE_EXPENSE,
    parseToYearAndMonth
} from "../../utilities";

let wrapper

describe('test Home container component', () => {
    beforeEach(() => {
        wrapper = mount(<Home />)
    })

    it('it should render the default layout', () => {
        const currentDate = parseToYearAndMonth('2020-01-02')
        //Here, we only need to check the props() of the components.
        //Their functionalities are checked by their own tester
        expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW);
        expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year);
        expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month);
        expect(wrapper.find(PriceList).props().items.length).toEqual(2);
    })

    it('View tab should switch upon mouse clicking', () => {
        wrapper.find('.nav-item a').last().simulate('click')
        expect(wrapper.find(PriceList).length).toEqual(0)
        expect(wrapper.find('.chart-title').length).toEqual(1)
        expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW)
    })

    it('PriceList should update upon change of date', () => {
        wrapper.find('.dropdown-toggle').simulate('click')
        wrapper.find('.months-range .dropdown-item').at(8).simulate('click')
        expect(wrapper.find(MonthPicker).props().month).toEqual(9)
    })

    it('A new item should be created upon clicking the CreateBtn', () => {
        wrapper.find(CreateBtn).simulate('click')
        expect(wrapper.find(PriceList).props().items.length).toEqual(3);
        expect(wrapper.state('items')[0]).toEqual(newItem)
    })

})
