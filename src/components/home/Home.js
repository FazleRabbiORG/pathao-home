import React from 'react'
import Banner from '../banner/Banner'
import Download from '../download/Download'
import Earn from '../earnsection/Earn'
import Movingsafty from '../movingsafety/Movingsafty'
import News from '../news/News'
import PathaoNav from '../pathaonav/PathaoNav'
import Merchant from '../merchant/Merchant'
import Blog from '../blog/Blog'
import Footer from '../footer/Footer'
import PlatForm from '../platform/PlatForm'

const Home = () => {
    return (
        <div>
            <PathaoNav/>
            <Banner/>
            <PlatForm/>
            <Movingsafty/>
            <Earn/>
            <Download/>
            <News/>
            <Merchant/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home
