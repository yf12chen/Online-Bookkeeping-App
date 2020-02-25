import React from "react";
import ReactDOM from 'react-dom'
import { mount } from "enzyme";
import MonthPicker from '../MonthPicker';
import { items } from "../../containers/Home";

let props = {
    year: 2020,
    month: 2,
    monthYearSelected: jest.fn()
}

let wrapper;

describe('test MonthPicker component', () => {
    beforeEach(() => {
        wrapper = mount(<MonthPicker {...props} />)
    })

    it('rendered the correct year and month, show correct dropdown list', () => {
        const buttonText = wrapper.find('.dropdown-toggle').text();
        expect(buttonText).toEqual('02 / 2020 ')
        expect(wrapper.find('dropdown-menu').length).toEqual(0)

        expect(wrapper.state('isOpen')).toEqual(false)
        expect(wrapper.state('selectedYear')).toEqual(props.year)
    })

    it('Check if dropdown list show when clicked', () => {
        wrapper.find('.dropdown-toggle').simulate('click')
        expect(wrapper.state('isOpen')).toEqual(true)
        expect(wrapper.find('.dropdown-menu').length).toEqual(1)
        expect(wrapper.find('.years-range .dropdown-item').length).toEqual(9)
        expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12)
        expect(wrapper.find('.years-range .dropdown-item.active').text()).toEqual('2020')
        expect(wrapper.find('.months-range .dropdown-item.active').text()).toEqual('02')

        expect(wrapper.find('.years-range .dropdown-item').first().text()).toEqual(`${props.year - 4}`)
        expect(wrapper.find('.months-range .dropdown-item').first().text()).toEqual('01')
    })

    it('it should pass the right year and month to parent component', () => {
        wrapper.find('.dropdown-toggle').simulate('click')
        wrapper.find('.years-range .dropdown-item').first().simulate('click')
        expect(wrapper.find('.years-range .dropdown-item').first().hasClass('active')).toEqual(true)
        expect(wrapper.state('selectedYear')).toEqual(2016)

        wrapper.find('.months-range .dropdown-item').first().simulate('click')
        expect(wrapper.state('isOpen')).toEqual(false)
        expect(props.monthYearSelected).toHaveBeenCalledWith(2016, 1)
    })

    it('close anywhere but the dropdown list should close it', () => {
        let eventMap = {}
        document.addEventListener = jest.fn((event, cb) => {
            eventMap[event] = cb
        })
        const wrapper = mount(<MonthPicker {...props} />)
        wrapper.find('.dropdown-toggle').simulate('click')
        expect(wrapper.state('isOpen')).toEqual(true)
        expect(wrapper.find('.dropdown-menu').length).toEqual(1)

        eventMap.click({
            target: ReactDOM.findDOMNode(wrapper.instance())
        })
        expect(wrapper.state('isOpen')).toEqual(true)

        eventMap.click({
            target: document
        })
        expect(wrapper.state('isOpen')).toEqual(false)
    })
})