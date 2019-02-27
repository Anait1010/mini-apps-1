class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current:'mainPage',
      name:'',
      email:'',
      password:'',
      addressOne:'',
      addressTwo:'',
      city:'',
      state:'',
      zipCode:'',
      phoneNumber:'',
      creditCard:'',
      exp:'',
      cvv:'',
      billingZip:''
    }
  }
  checkoutPage() {
    this.setState({current: F1})
  }

  form1Page() {
    this.setState({
      current:'F2',
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
  }

  form2Page() {
    this.setState({
      current: 'F3',
      addressOne: this.state.addressOne,
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber
    })
  }

  form3Page() {
    this.setState({
      current:'Confirmation',
      creditCard: this.state.creditCard,
      exp: this.state.exp,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    })
  }

  purchasePage() {
    this.setState({current: 'mainPage'})
  }
  render() {
    if (this.state.current === 'mainPage') {
      return (
        <button id = 'checkout' onClick={this.form1Page.bind(this)}> CHECKOUT</button>
      );
    }
    if (this.state.current === 'F2') {
      return (
        <div>
          <h1>Enter Customer Information</h1>
          <form>
            <lable>First Name</lable>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>Email</lable>
              <input type="text" id="email" value={this.state.email} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>Password</lable>
              <input type="password" id="password" value={this.state.password} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <input type="submit" value="Next" onClick={this.form2Page.bind(this)}></input>
          </form>
        </div>
      ); 
    }
    if (this.state.current === 'F3') {
      return (
        <div>
          <h1>Shipping Information</h1>
          <form>
            <lable>Address line 1</lable>
              <input type="text" id="addressOne" name="addressOne" value={this.state.addressOne} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>Address line 2</lable>
              <input type="text" id="addressTwo" value={this.state.addressTwo} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>City</lable>
              <input type="text" id="city" value={this.state.city} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>State</lable>
              <input type="text" id="state" value={this.state.state} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>Zip Code</lable>
              <input type="text" id="zipCode" value={this.state.zipCode} onChange={this.onInputChange.bind(this)}></input>
              <br></br>
            <lable>Phone Number</lable>
              <input type="text" id="phoneNumber" value={this.state.phoneNumber} onChange={this.onInputChange.bind(this)}></input>
              <br></br> 
            <input type="submit" value="Next" onClick={this.form3Page.bind(this)}></input>
          </form>
        </div>
      );
    }
    if (this.state.current === 'Confirmation') {
      return (
        <div>
          <h1>Billing Information</h1>
          <form>
          <lable>Credit Card Number</lable> 
            <input type="text" id="creditCard"  value={this.state.creditCard} onChange={this.onInputChange.bind(this)}></input>
            <br></br>
          <lable>Expiration</lable>  
            <input type="text" id="exp"  value={this.state.exp} onChange={this.onInputChange.bind(this)}></input>
            <br></br>
          <lable>CVV</lable> 
            <input type="text" id="cvv" value={this.state.cvv} onChange={this.onInputChange.bind(this)}></input>
            <br></br>
          <lable>Billing Zip</lable> 
            <input type="text" id="billingZip"  value={this.state.billing} onChange={this.onInputChange.bind(this)}></input>
            <br></br>
          <input type="submit" value="Next" onClick={this.Confirmation.bind(this)}></input>
        </form>
      </div>
      ); 
    }
    if (this.state.current === 'purchasePage') {
      return (
        <div>
        <h1>Confirmation</h1>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <p>Address line 1: {this.state.addressOne}</p>
        <p>Address line 2: {this.state.addressTwo}</p>
        <p>City: {this.state.city}</p>
        <p>State: {this.state.state}</p>
        <p>Zip Code: {this.state.zipCode}</p>
        <p>Phone Number: {this.state.phoneNumber}</p>
        <p>Credit Card Number: {this.state.creditCard}</p>
        <p>Expiration: {this.state.exp}</p>
        <p>CVV: {this.state.cvv}</p>
        <p>Billing Zip Code: {this.state.billingZip}</p>
    
        <button onClick={this.mainPage.bind(this)}>PURCHASE</button>
      </div>
      ); 
    }
  }
}

// class FormOne extends App {
//   constructor(props) {
//     super(props);
//   }
// }

// class FormTwo extends App {
//   constructor(props) {
//     super(props);
//   }
// }

// class FormThree extends App {
//   constructor(props) {
//     super(props);
//   }
// }
ReactDOM.render(React.createElement(App), document.getElementById('root'));