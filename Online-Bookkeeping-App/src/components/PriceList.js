import React from 'react';
import PropTypes from 'prop-types';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                        key={item.id}>
                        <span className="col-1 badge badge-primary " >
                            <ion-icon
                                class="rounded-circle"
                                style={{ backgroundColor: '#007bff', padding: '5px', color: '#fff', fontSize: '30px' }}
                                name={item.category.iconName}
                            />
                        </span>
                        <span className="col-5"> {item.title} </span>
                        <span className="col-2 font-weight-bold "> {(item.category.type === 'expense' ? '-' : '+')}${item.price} </span>
                        <span className="col-2 ">${item.date} </span>
                        <a className="col-1" href="/#" onClick={() => { onModifyItem(item) }}>
                            <ion-icon
                                class="rounded-circle"
                                style={{ backgroundColor: 'green', padding: '5px', color: '#fff', fontSize: '30px' }}
                                name='create-outline'
                            />
                        </a>
                        <a className="col-1" href="/#" onClick={() => { onDeleteItem(item) }}>
                            <ion-icon
                                class="rounded-circle"
                                style={{ backgroundColor: 'red', padding: '5px', color: '#fff', fontSize: '30px' }}
                                name='trash-outline'
                            />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

PriceList.propType = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
};

PriceList.defaultProps = {
    onModifyItem: () => { }
}

export default PriceList;