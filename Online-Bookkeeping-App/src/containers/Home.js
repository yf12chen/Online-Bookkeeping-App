import React, { Component } from 'react'

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_EXPENSE } from '../utilities'

const items = [
    {
        "id": 1,
        "title": "travel to China",
        "price": 2000,
        "date": "2020-01-23",
        "category": {
            "id": "1",
            "name": "travel",
            "type": "expense",
            "iconName": "airplane"
        }
    },
    {
        "id": 2,
        "title": "travel to Japan",
        "price": 3000,
        "date": "2020-01-28",
        "category": {
            "id": "1",
            "name": "travel",
            "type": "expense",
            "iconName": "airplane"
        }
    },
    {
        "id": 3,
        "title": "investment income",
        "price": 30000,
        "date": "2020-02-15",
        "category": {
            "id": "2",
            "name": "investment",
            "type": "income",
            "iconName": "cash-outline"
        }
    }
]

class Home extends Component {
    render() {
        let totalIncome = 0
        let totalExpense = 0

        items.forEach((item) => {
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
                                year={2019}
                                month={3}
                                monthYearSelected={() => { }}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice income={totalIncome} expense={totalExpense} />
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab activeTab={LIST_VIEW} onTabChange={()=>{}}/>
                    <CreateBtn onClick={()=>{}}/>
                    <PriceList items={items} onModifyItem={()=>{}} onDeleteItem={()=>{}} />
                </div>

            </React.Fragment>
        )
    }
}

export default Home