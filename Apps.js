import { Component, Fragment } from "react";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      count : 0,
      data : ['apple','banana','Grapes'],
      obj : {
        name : 'Acil Technologies'
      }
    } 
  }

 

  getProductData = (val) => {

    console.log(val.target.innerHTML)
    val.target.disabled = true
    val.target.innerHTML = 'Please Wait ........'
    // return fetch('https://www.firstindiapropmart.com/admin/api/galatron-apis.php?type=products')
    // .then(res => res.json())
    // .then(response=>console.log(response))

  }


  render() {
    // console.log('hiiiiiiiiiiiiiiiiiiiiii')
    console.log(this.state.data)
    return (
      <Fragment>
        <h1>Hello Acil Technologies!!!! 2 + 2 =  
          {this.state.obj.name}
          {this.state.obj.data}
           <button type="submit" name="One" data-speed="10" onClick={(e) => this.getProductData(e)} disabled={false}>Get All Data</button>
          <button type="submit" name="Two" data-speed="10" onClick={(e) => this.getProductData(e)} disabled={false}>Get All Data 2  </button>

          <h1>{this.state.count} {this.state.count * this.state.count}</h1><button onClick={()=> 
          this.setState({
                count: this.state.count + 1,
                data : [...this.state.data,'Orange']
            }, ()=> console.log('Updated'))
          }>Increase Count</button>


        <button onClick={()=> 
          this.setState({
                count: this.state.count - 1,
             //   data : [...this.state.data,'Orange']
            }, ()=> console.log('Updated'))
          }>Decrease Count</button>
        </h1>
      </Fragment>
    )
  }
}
