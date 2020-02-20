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
        this.checkClick = null;
        this.setCheckClick = (e) => {
            this.checkClick = e;
        }
    }
    componentDidMount() {
        // autofocus the input on mount
        document.addEventListener('click', this.handleClick, false)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }

    handleClick = (e) => {
        if (this.checkClick.contains(e.target)) {
            return
        }
        this.setState({
            isOpen: false
        })
    }
    toggleDropDown = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    selectedYear = (e, year) => {
        e.preventDefault()
        this.setState({
            selectedYear: year
        })
    }
    selectedMonth = (e, month) => {
        e.preventDefault()
        this.setState({
            selectedMonth: month,
            isOpen: false
        })
        this.props.monthYearSelected(this.state.selectedYear, month)
    }
    render() {
        //const { year, month } = this.props
        const { isOpen, selectedYear, selectedMonth } = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map((i) => i + this.props.year)

        return (

            <div className="dropdown month-picker-component" ref={this.setCheckClick}>
                <h5>Select Month</h5>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle w-75"
                    onClick={this.toggleDropDown}
                >
                    {`${addZeroToMonth(selectedMonth)} / ${selectedYear}`}
                </button>
                {isOpen &&
                    <div className="dropdown-menu w-75" style={{ display: 'block' }}>
                        <div className="row">
                            <div className="col border-right years-range" >
                                {yearRange.map((i, index) =>
                                    <a
                                        role="button"
                                        className={`${(i === selectedYear) ? 'dropdown-item active' : 'dropdown-item'}`}
                                        href="/#"
                                        key={index}
                                        onClick={(e) => { this.selectedYear(e, i) }}
                                    >
                                        {i}
                                    </a>
                                )}
                            </div>
                            <div className="col months-range">
                                {monthRange.map((i, index) =>
                                    <a
                                        role="button"
                                        className={(i === selectedMonth) ? 'dropdown-item active' : 'dropdown-item'}
                                        href="/#"
                                        key={index}
                                        onClick={(e) => { this.selectedMonth(e, i) }}
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

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    monthYearSelected: PropTypes.func.isRequired
}

export default MonthPicker;