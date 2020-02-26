import React from 'react';
import { mount } from 'enzyme'
import CategorySelect from '../CategorySelect'

export const categories = [
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
    onSelectCategory: jest.fn()
}

let props_with_category = {
    categories,
    onSelectCategory: jest.fn(),
    selectedCategory: categories[0],
}

describe('CategorySelect Test ', () => {

    it('categories are rendered', () => {
        const wrapper = mount(<CategorySelect {...props} />)
        expect(wrapper.find('.category-item').length).toEqual(categories.length)
        expect(wrapper.find('.category-item.active').length).toEqual(0)
        const firstIcon = wrapper.find('.category-item').first().find('ion-icon')
        expect(firstIcon.length).toEqual(1)
        expect(firstIcon.props().icon).toEqual(categories[0].iconName)
    })
    it('selectedCategory should highlight corresponding item', () => {
        const wrapper = mount(<CategorySelect {...props_with_category} />)
        expect(wrapper.find('.category-item').first().hasClass('active')).toEqual(true)
    })
    it('click the item should add active class and trigger the callback', () => {
        const wrapper = mount(<CategorySelect {...props_with_category} />)
        wrapper.find('.category-item').at(1).simulate('click', { preventDefault: () => { } })
        expect(props_with_category.onSelectCategory).toHaveBeenCalledWith(categories[1])
    })
})

