import React from 'react'
import PropTypes from 'prop-types'
const TotalPrice = ({ income, expense }) => (
    <div className="container-fluid" >
        <div className="row">
            <div className="col">
                <h5 className="income">Income：<span>{income}</span></h5>
            </div>
            <div className="col">
                <h5 className="expense">Expense：<span>{expense}</span></h5>
            </div>
        </div>
    </div>

)

TotalPrice.propTypes = {
    income: PropTypes.number.isRequired,
    expense: PropTypes.number.isRequired,
}
export default TotalPrice