import React from 'react';
import { mount } from 'enzyme'
import CategorySelect from '../CategorySelect'

const categories = [
    {
        'id': '1',
        'name': 'Travel',
        'type': 'expense',
        'iconName': 'airplane'
    },
    {
        'id': '2',
        'name': 'investment',
        'type': 'income',
        'iconName': 'cash-outline'
    },
    {
        'id': '3',
        'name': 'investment',
        'type': 'income',
        'iconName': 'cash-outline'
    },
]

let props = {
    categories,
    onSelectCategory: jest.fn(),
}

let props_with_highlights = {
    categories,
    onSelectCategory: jest.fn(),
    selectedCategory: categories[0],
}

describe('CategorySelect Component Tester', () => {
    it('Correct category items should be rendered', () => {
        const wrapper = mount(<CategorySelect {...props} />)
        expect(wrapper.find('.category-item').length).toEqual(categories.length)
        expect(wrapper.find('.category-item.active').length).toEqual(0)
        const firstIcon = wrapper.find('.category-item').first().find('ion-icon')
        expect(firstIcon.length).toEqual(1)
        expect(firstIcon.props().name).toEqual(categories[0].iconName)
    })

    it('selectedCategory should be highlighted', () => {
        const wrapper = mount(<CategorySelect {...props_with_highlights} />)
        expect(wrapper.find('.category-item').first().hasClass('active')).toEqual(true)
    })

    it('check the callback of onSelectCategory', () => {
        const wrapper = mount(<CategorySelect {...props_with_highlights} />)
        wrapper.find('.category-item').at(1).simulate('click')
        expect(wrapper.find('.category-item').at(1).hasClass('active')).toEqual(true)
        expect(wrapper.find('.category-item').at(0).hasClass('active')).toEqual(false)
        expect(props_with_highlights.onSelectCategory).toHaveBeenCalledWith(categories[1])
    })

})