import React from 'react'
import PropTypes from 'prop-types'

class CategorySelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id
        }
    }

    selectedCategory = (event, category) => {
        this.setState({
            selectedCategoryId: category.id
        })
        this.props.onSelectCategory(category)
        event.preventDefault()
    }
    render() {
        const { categories, selectedCategory } = this.props
        return (
            <div className="category-select-component">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const activeClassName = (selectedCategory && selectedCategory.id === category.id) ? 'category-item col-3 active' : 'category-item col-3'
                            return (
                                <div className={activeClassName} key={index} onClick={(event) => { this.selectedCategory(event, category) }}>
                                    <ion-icon
                                        class="rounded-circle"
                                        style={{
                                            backgroundColor: "",
                                            padding: "5px",
                                            color: "#555",
                                            fontSize: "50px"
                                        }}
                                        name={category.iconName}
                                    />

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default CategorySelect