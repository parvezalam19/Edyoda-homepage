import React, { Component } from 'react'
import { category } from './utils/utlis'
import { cardData } from './utils/utlis';


export default class CardSection extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            selectedUser: { id: 1, name: "All" },
        
        };

    }


    componentDidMount() {
        this.setState({ data: cardData });
    }

    filterCard(elm) {
        this.setState({ selectedUser: elm });
        if (elm.name === "All") {
          this.setState({ data: cardData });
        } else {
          let filterAll = cardData.filter((items) => {
            return items.category === elm.name;
          });
          this.setState({ data: filterAll });
        }
      }
    render() {

        return (
            <>
                <span class="title">Latest Posts</span>
                <div class="filter" id='filter'>
                    <i class="fa-solid fa-filter"></i>
                    <span>Filter by category</span>
                </div>
                <div class="categories">
                    {category && category.map((elm, index) => {
                        return <span className={this.state.selectedUser && this.state.selectedUser.id === elm.id ? 'active' : ''}
                           


                            key={elm.id} onClick={(e) => this.filterCard(elm)} >
                            <a href="#filter">{elm.name}</a>
                        </span>
                    })}

                </div>
                <div className="card-section">
                    {this.state.data.length > 0 ? this.state.data && this.state.data.map((elm) => {
                        return <div class="card" key={elm.id}>
                            <div class="image">
                                <img src={elm.image} alt="blog-image" />
                            </div>
                            <div class="text-content">
                                <div class="heading">
                                    <h1>{elm.title.slice(0, 50)}...</h1>
                                </div>
                                <div>
                                    <div class="author">{elm.name} <span class="date">| {elm.date} </span></div>
                                </div>
                                <div class="desc">
                                    <p> {elm.description.slice(0, 120)}...</p>


                                </div>

                            </div>
                        </div>
                    }) : (
                        <p className='cards-empty-message'>There are no cards in this category</p>
                      )}

                </div>



            </>
        )
    }
}
