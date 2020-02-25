import React, { Component } from "react";

import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import TotalPrice from "../components/TotalPrice";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";

import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_EXPENSE,
  parseToYearAndMonth
} from "../utilities";

export const categories = {
  "1": {
    id: "1",
    name: "travel",
    type: "expense",
    iconName: "airplane"
  },
  "2": {
    id: "2",
    name: "investment",
    type: "income",
    iconName: "cash-outline"
  }
};

export const items = [
  {
    id: 1,
    title: "travel to Toronto",
    price: 2000,
    date: "2020-01-23",
    cid: 1
  },
  {
    id: 2,
    title: "travel to Vancouver",
    price: 3000,
    date: "2020-01-28",
    cid: 1
  },
  {
    id: 3,
    title: "investment income",
    price: 30000,
    date: "2020-02-15",
    cid: 2
  }
];

const newItem = {
  id: 4,
  title: "A New Entry",
  price: 300,
  date: "2020-02-21",
  cid: 1
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    };
  }

  changeView = view => {
    this.setState({
      tabView: view
    });
  };
  monthYearSelected = (year, month) => {
    this.setState({
      currentDate: { year, month }
    });
  };
  modifyItem = modifiedItem => {
    let modifiedItems = this.state.items.map(item => {
      if (modifiedItem.id === item.id) {
        return { ...item, title: "This is modified" };
      } else {
        return item;
      }
    });

    this.setState({
      items: modifiedItems
    });
  };
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    });
  };
  deleteItem = deletedItem => {
    const filteredItems = this.state.items.filter(item => {
      return deletedItem.id !== item.id;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    const { items, currentDate, tabView } = this.state;
    const itemsWithCategory = items
      .map(item => {
        item.category = categories[item.cid];
        return item;
      })
      .filter(item => {
        let itemMonth = new Date(item.date);
        return itemMonth.getMonth() === this.state.currentDate.month - 1;
      });

    let totalIncome = 0;
    let totalExpense = 0;

    itemsWithCategory.forEach(item => {
      if (item.category.type === TYPE_INCOME) {
        totalIncome += item.price;
      } else {
        totalExpense += item.price;
      }
    });
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
                monthYearSelected={this.monthYearSelected}
              />
            </div>
            <div className="col">
              <TotalPrice income={totalIncome} expense={totalExpense} />
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab activeTab={tabView} onTabChange={this.changeView} />
          <CreateBtn onClick={this.createItem} />
          {tabView === LIST_VIEW ? (
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          ) : (
              <div>A Pie Diagram {console.log(this.state.currentDate)}</div>
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
