import React, { Component } from 'react'
import CardSection from './CardSection'

export default class MainSection extends Component {
    render() {
        return (
            <section className='main-section'>
                <h1 className='main-title'>Trending Post</h1>
                <div className='trending-post-box'>

                    <div className="trending-left-cont">
                        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" alt="" />
                        {/* hello */}
                    </div>
                    <div className="trending-right-cont">
                        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg" alt="" width='75%' />
                        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg" alt="" width='75%' />



                    </div>


                </div>

<CardSection />

              



            </section>
        )
    }
}
