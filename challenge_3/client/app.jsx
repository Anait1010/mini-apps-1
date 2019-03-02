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
      this.newFunction = this.newFunction.bind(this)
  }

  newFunction(event) {
    this.setState({
      [event.target.id]:event.target.value
    })
   // console.log('State------>', this.state);
  }

  checkoutPage() {
    this.setState({current: 'F1'})
      fetch('/formOne', {
        method: 'GET',
      })
  }

  form1Page(event) {
    this.setState({
      current:'F2',
    })
    //console.log("event------>", `{ ${event.target.id}: ${event.target.value}}`)
    fetch('/formTwo', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }),
    }).catch(function(err) {
      console.log('Error',err);
    })
  }

  form2Page() {
    this.setState({
      current: 'F3',
    })
    fetch('/formThree', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
        addressOne: this.state.addressOne,
        addressTwo: this.state.addressTwo,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber
      }),
    }).catch(function(err) {
      console.log('Error',err);
    })
  }

  form3Page() {
    this.setState({
      current:'Confirmation',
    })
    fetch('/confirmationForm', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
        creditCard: this.state.creditCard,
        exp: this.state.exp,
        cvv: this.state.cvv,
        billingZip: this.state.billingZip
        })
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
          <h2>Enter Customer Information</h2>
          <form>
            <label>First Name</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.newFunction}></input>
              <br></br>
            <label>Email</label>
              <input type="text" id="email" value={this.state.email} onChange={this.newFunction}></input>
              <br></br>
            <label>Password</label>
              <input type="password" id="password" value={this.state.password} onChange={this.newFunction}></input>
              <br></br>
            <input type="submit" value="Next" onClick={this.form2Page.bind(this)}></input>
          </form>
        </div>
      ); 
    }
    if (this.state.current === 'F3') {
      return (
        <div>
          <h2>Shipping Information</h2>
          <form>
            <label>Address line 1</label>
              <input type="text" id="addressOne" name="addressOne" value={this.state.addressOne} onChange={this.newFunction}></input>
              <br></br>
            <label>Address line 2</label>
              <input type="text" id="addressTwo" value={this.state.addressTwo} onChange={this.newFunction}></input>
              <br></br>
            <label>City</label>
              <input type="text" id="city" value={this.state.city} onChange={this.newFunction}></input>
              <br></br>
            <label>State</label>
              <input type="text" id="state" value={this.state.state} onChange={this.newFunction}></input>
              <br></br>
            <label>Zip Code</label>
              <input type="text" id="zipCode" value={this.state.zipCode} onChange={this.newFunction}></input>
              <br></br>
            <label>Phone Number</label>
              <input type="text" id="phoneNumber" value={this.state.phoneNumber} onChange={this.newFunction}></input>
              <br></br> 
            <input type="submit" value="Next" onClick={this.form3Page.bind(this)}></input>
          </form>
        </div>
      );
    }
    if (this.state.current === 'Confirmation') {
      return (
        <div>
          <h2>Billing Information</h2>
          <form>
          <label>Credit Card Number</label> 
            <input type="text" id="creditCard"  value={this.state.creditCard} onChange={this.newFunction}></input>
            <br></br>
          <label>Expiration</label>  
            <input type="text" id="exp"  value={this.state.exp} onChange={this.newFunction}></input>
            <br></br>
          <label>CVV</label> 
            <input type="text" id="cvv" value={this.state.cvv} onChange={this.newFunction}></input>
            <br></br>
          <label>Billing Zip</label> 
            <input type="text" id="billingZip"  value={this.state.billing} onChange={this.newFunction}></input>
            <br></br>
          <input type="submit" value="Next" onClick={this.purchasePage.bind(this)}></input>
        </form>
      </div>
      ); 
    }
    if (this.state.current === 'mainPage') {
      return (
        <div>
        <h2>Confirmation</h2>
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
    
        <button onClick={this.purchasePage.bind(this)}>PURCHASE</button>
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