import React from 'react';
import CategorySelect from '../components/CategorySelect'
import { Tabs, Tab } from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import { testCategories } from '../testData'
import { TYPE_INCOME, TYPE_EXPENSE } from '../utilities'

class Create extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const filterCategories = testCategories.filter((category) => { return category.type === TYPE_EXPENSE })
        return (
            <div className="create-page px-3 py-3 mt-3 rounded" style={{ background: '#fff' }} >
                <Tabs activeIndex={0} onTabChange={() => { }}>
                    <Tab>Income</Tab>
                    <Tab>Expense</Tab>
                </Tabs>
                <CategorySelect categories={filterCategories} onSelectCategory={() => { }} />
                <PriceForm
                    onFormSubmit={() => { }}
                    onCancelSubmit={() => { }}
                />
            </div>
        )
    }
}

export default Create;