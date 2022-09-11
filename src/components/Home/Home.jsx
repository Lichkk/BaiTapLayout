import React, { Component } from 'react'
import Banner from '../body/Banner/Banner'
import Item from '../body/Item/Item'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default class Home extends Component {
  render() {
    return (
     <div>
         <Header/>
        <Banner/>
        <Item/>
        <Footer/>
     </div>
    )
  }
}
