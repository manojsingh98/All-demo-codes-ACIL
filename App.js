import { Component, Fragment } from "react";

export default class App extends Component {
  showAlert() {
    alert('Hello')
  }
  render() {
    return (
      <Fragment>
          <Header />
          <h1>Hello Acil Technologies!!!!  </h1>
          <Footer />
      </Fragment>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <h1>This is Header FIle</h1>
    )
  }
}

class Footer extends Component {
  render() {
    return (<h1>Footer</h1>)
  }
}


