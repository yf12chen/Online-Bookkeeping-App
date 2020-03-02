import React from 'react'
import PropTypes from 'prop-types'

class CategorySelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id
        }
    }

    setSelectedCategory = (event, category) => {
        this.setState({
            selectedCategoryId: category.id
        })
        this.props.onSelectCategory(category)
        event.preventDefault()
    }
    render() {
        const { categories } = this.props
        const { selectedCategoryId } = this.state
        return (

            <div className="row category-select-component">
                {categories.map((category, index) => {
                    const activeClassName = (selectedCategoryId === category.id) ? 'category-item col-3 active' : 'category-item col-3'

                    return (
                        <div className={activeClassName} key={index} role="button" style={{ textAlign: 'center' }}
                            onClick={(event) => { this.setSelectedCategory(event, category) }}>
                            <ion-icon
                                class="rounded-circle"
                                style={{
                                    backgroundColor: (category.id === selectedCategoryId) ? '#347eff' : '#efefef',
                                    padding: "10px",
                                    color: (category.id === selectedCategoryId) ? '#fff' : 'black',
                                    fontSize: "50px"
                                }}
                                name={category.iconName}
                            />
                            <p>{category.name}</p>
                        </div>
                    )

                })}
            </div>

        )
    }
}

export default CategorySelect