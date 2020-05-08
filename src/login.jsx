import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Input from "./input";
import axios from "axios";
import {LogIn} from "./services/users"
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleEvent = this.handleEvent.bind(this);
    {
      /* check if can be removed */
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({[e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { email, password } = this.state;
// debugger;
    axios.post("http://localhost:5000/users/login", { email, password }).then(result => {
      console.log( "Welcome :",this.state.email);
      console.log( "emaillll:",email);
    });
  };
  handleSave = async (e) => {
    console.log("hiiiii :",this.state);
    // const { email, password, secondpassword } = this.state.user;
    e.preventDefault();
    const data = await LogIn(this.state);
    console.log("enterd for register:",data);
    // clone
    // const users = [...this.props.users];
    // const user=users.find(data)
    // console.log(users)
    // this.setState({ products });
    if(data){
    this.props.history.push("/productlist");
    }
  };



  render() {
    const { email, password} = this.state;
    return (
      <div className="container">
        {/* onSubmit={this.handleSubmit} method="POST"
         action="http://localhost:5000/users/login" */}
        <form className="login" onSubmit={this.handleSave} action="">
          <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
          <div className="form-group">
            {/* <label htmlFor="">Username or E-mail Address</label> */}
            {/* <input className="form-control" type="text" name="" id="" /> */}
            <Input
            required
            id="email"
            label="Username or E-mail Address"
            className="form-control"
            margin="normal"
            value={email}
            name="email"
            onChange={e => this.handleEvent(e)}
          />
          </div>
          <div className="form-group login__Password">
            <a href="#" className="login__forget-password">
              (Forget Password?)
            </a>
            {/* <label htmlFor="">Password</label>
            <input className="form-control" type="text" name="" id="" /> */}
             <Input
                label="Password"
                name="password"
                value={password}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
          </div>
          <div className="login__remember-me">
            <div className="form-group__checkbox">
              <input type="checkbox" name="" id="" />
              <span>Remember Me</span>
            </div>
            <div className="add-product__actions">
              <button href="#" className="btn btn--gray">
              <Link  to="/productlist">
                Cancel
                </Link> 
              </button>
              <button type="submit" className="btn btn--primary">
              {/* <Link onClick={this.handleSave} to="/productlist"> */}
                  Login
                {/* </Link>                */}
              </button>
            </div>
          </div>
          <Link to="/register" className="login__register-now">
            Register Now
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
