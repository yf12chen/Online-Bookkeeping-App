import React from 'react'
import PropTypes from 'prop-types'
import { addZeroToMonth, range } from '../utilities'

class MonthPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year,
            selectedMonth: this.props.month
        }
    }
    toggleDropDown = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    selectedYear=(e,year)=>{
        e.preventDefault()
        this.setState({
            selectedYear: year
        })
    }
    selectedMonth=(e,month)=>{
        e.preventDefault()
        this.setState({
            selectedMonth: month,
            isOpen: false
        })
        this.props.monthYearSelected(this.state.selectedYear,month)
    }
    render() {
        //const { year, month } = this.props
        const { isOpen, selectedYear,selectedMonth } = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map((i) => i + this.props.year)
        
        return (
            
            <div className="dropdown month-picker-component">
                <h4>Select Month</h4>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropDown}
                >
                    {`Month: ${addZeroToMonth(selectedMonth)} Year: ${selectedYear}`}
                </button>
                {isOpen &&
                    <div className="dropdown-menu" style={{ display: 'block' }}>
                        <div className="row">
                            <div className="col border-right" >
                                {yearRange.map((i, index) =>
                                    <a
                                        className={(i===selectedYear)?'dropdown-item active':'dropdown-item'}
                                        href="/#"
                                        key={index}
                                        onClick={(e)=>{this.selectedYear(e,i)}}
                                    >
                                        {i}
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                {monthRange.map((i, index) =>
                                    <a
                                        className={(i===selectedMonth)?'dropdown-item active':'dropdown-item'}
                                        href="/#"
                                        key={index}
                                        onClick={(e)=>{this.selectedMonth(e,i)}}
                                    >
                                        {addZeroToMonth(i)}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
            
        )
    }
}

MonthPicker.propTypes={
    year:PropTypes.number.isRequired,
    month:PropTypes.number.isRequired,
    monthYearSelected:PropTypes.func.isRequired
}

export default MonthPicker;