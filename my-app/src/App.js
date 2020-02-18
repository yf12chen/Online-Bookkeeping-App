import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import PriceList from './components/PriceList'

const items = [
    {
        "id":1,
        "title":"travel to China",
        "price":2000,
        "date":"2020-01-23",
        "category":{
            "id":"1",
            "name":"travel",
            "type":"expense"
        }
    },
    {
        "id":2,
        "title":"travel to Japan",
        "price":3000,
        "date":"2020-01-28",
        "category":{
            "id":"1",
            "name":"travel",
            "type":"expense"
        }
    }
]

class App extends Component {
    render(){
        return(
            <div className="App">
                <PriceList items={items} onModifyItem={(i)=>{alert(i.id)}} onDeleteItem={(i)=>{alert(i.id)}}/>
            </div>
            
        )
    }
}

export default App; 