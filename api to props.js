import React, { Component } from "react";
import { getProductData, getProductByCategoryId, getCategoryData } from './services/api/product.api'
import Product from './component/product/product.component'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      cname: 'ACIL TECHNOLOGIES',
      count: 0
    }
  }


  getApiData = () => {
    fetch('https://www.firstindiapropmart.com/admin/api/galatron-apis.php?type=products')
      .then(res => res.json())
      .then(result => this.setState({ data: result.data }))
  }

  componentDidMount() {
    this.getApiData()
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    //  console.log(this.state.data)
    return (
      <>
        <Header updateCount={() => this.updateCount()} />
        <Footer name={this.state.cname} count={this.state.count} />
        <Table data={this.state.data} />
      </>
    )
  }
}


class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.updateCount()}>Update Count</button>

      </React.Fragment>
    )
  }
}


class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companyName: props.name
    }
  }
  render() {
    return (
      <h1>Company Name is : {this.state.companyName} - {this.props.count} </h1>
    )
  }
}


class Table extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.data)
    return (
      <table width="100%">
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
        {this.props.data.map((val) => {
          return (
            <tr>
              <td>{val.title}</td>
              <td>{val.price}</td>
            </tr>
          )
        })}
      </table>
    )
  }
}