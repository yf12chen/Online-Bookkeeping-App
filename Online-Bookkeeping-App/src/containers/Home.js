import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'
import MonthPicker from './components/MonthPicker'
import {LIST_VIEW, CHART_VIEW} from './utilities'

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
    }
]

