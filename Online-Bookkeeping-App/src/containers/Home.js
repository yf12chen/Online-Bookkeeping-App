import React, { Component } from 'react'

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_EXPENSE, parseToYearAndMonth } from '../utilities'

const categories = {
    "1": {
        "id": "1",
        "name": "travel",
        "type": "expense",
        "iconName": "airplane"
    },
    "2": {
        "id": "2",
        "name": "investment",
        "type": "income",
        "iconName": "cash-outline"
    }
}

const items = [
    {
        "id": 1,
        "title": "travel to Toronto",
        "price": 2000,
        "date": "2020-01-23",
        "cid": 1
    },
    {
        "id": 2,
        "title": "travel to Vancouver",
        "price": 3000,
        "date": "2020-01-28",
        "cid": 1
    },
    {
        "id": 3,
        "title": "investment income",
        "price": 30000,
        "date": "2020-02-15",
        "cid": 2
    }
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }
    render() {
        const {items, currentDate, tabView} = this.state
        const itemsWithCategory = items.map(item=>{
            item.category = categories[item.cid]
            return item
        })

        let totalIncome = 0
        let totalExpense = 0

        itemsWithCategory.forEach((item) => {
            if (item.category.type === TYPE_INCOME) {
                totalIncome += item.price
            } else {
                totalExpense += item.price
            }
        })
        return (
            <React.Fragment>
                <header className="App-header">
                    <div className="row justify-content-center">
                        <h1 className="my-4">Personal Online Bookkeeping</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                monthYearSelected={() => { }}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice income={totalIncome} expense={totalExpense} />
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab activeTab={tabView} onTabChange={() => { }} />
                    <CreateBtn onClick={() => { }} />
                    <PriceList items={itemsWithCategory} onModifyItem={() => { }} onDeleteItem={() => { }} />
                </div>

            </React.Fragment>
        )
    }
}

export default Home