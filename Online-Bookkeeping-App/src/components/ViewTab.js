import React from 'react';
import PropTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../utilities'

const generateLinkClass = (activeTab, ownTab) => {
    return (activeTab === ownTab) ? 'nav-link  d-flex active justify-content-center' : ' d-flex nav-link justify-content-center';
}

const ViewTab = ({ activeTab, onTabChange }) => (
    <ul className="nav nav-tabs nav-fill my-4">
        <li className="nav-item ">
            <a className={generateLinkClass(activeTab, LIST_VIEW)}
                href="#"
                onClick={(event) => { event.preventDefault(); onTabChange(LIST_VIEW) }}
            >
                <ion-icon
                    class="rounded-circle mr-2"
                    style={{ color: '#007bff', fontSize: '25px' }}
                    name='list-outline'
                />
                List
            </a>
        </li>
        <li className="nav-item">
            <a className={generateLinkClass(activeTab, CHART_VIEW)}
                href="#"
                onClick={(event) => { event.preventDefault(); onTabChange(CHART_VIEW) }}
            >
                <ion-icon
                    class="rounded-circle mr-2"
                    style={{ color: '#007bff', fontSize: '25px' }}
                    name='pie-chart-outline'
                />
                Chart
            </a>
        </li>
    </ul>
)

ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
}

export default ViewTab;