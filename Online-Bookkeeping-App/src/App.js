import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <PriceList
                    items={items}
                    onModifyItem={(i) => { alert(i.id) }}
                    onDeleteItem={(i) => { alert(i.id) }}
                /> */}
                {/* <TotalPrice income={1000} outcome={1000} />
                <ViewTab 
                    activeTab={CHART_VIEW}
                    onTabChange={(i)=>console.log(i)}
                />*/}
                {/* <MonthPicker year={2018} month={3} monthYearSelected={(year, month)=>{console.log(year, month)} } /> */}
                <Home />
            </div>

        )
    }
}

export default App; 