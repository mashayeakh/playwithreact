import React from 'react'

const HeroSection = () => {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1 className="hero-text">
                        YOUR FEET
                        DESERVE
                        THE BEST
                    </h1>
                    <p className='hero-tag'>
                        DOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="btns">
                        <button className='shop-btn'>Shop Now</button>
                        <button className="category-btn">Category</button>
                    </div>
                    <p >Also Available On</p>
                    <div className='logos'>
                        <span className='flipkart-logo'>
                            <img src="/images/flipkart.png" alt="flipkart loading" />
                        </span>
                        <span className='amazon-logo'>
                            <img src="/images/amazon.png" alt="amazon loading" />
                        </span>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src="/images/shoe_image.png" alt="shoe loading" />
                </div>
            </main>
        </>
    )
}

export default HeroSection