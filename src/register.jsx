import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./input";
import { Add } from "./services/users";
import axios from "axios";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      secondpassword: ""
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
    const { email, password, secondpassword } = this.state;

    axios.post("http://localhost:5000/users/register", { email, password, secondpassword }).then(result => {
      console.log( "email :",this.stat.email);
      console.log( "emaillll:",email);
    });
  };

  // state = {
  //   user: {
  //     email: "",
  //     password: "",
  //     secondpassword: ""
  //   }
  //   // errors: {}
  // };
  // handleChange = e => {
  //   console.log(e.target.value);
  //   let user = { ...this.state.user };
  //   user[e.target.email] = e.target.value;
  //   user[e.target.password] = e.target.value;
  //   user[e.target.secondpassword] = e.target.value;
  //   this.setState({ user });
  //   // this.validateProperty(e.target);
  //   console.log(this.state.user);
  // };
  // debugger;
  handleSave = async (e) => {
    e.preventDefault();
    console.log(this.state);
    // const { email, password, secondpassword } = this.state.user;

    const data = await Add(this.state);
    console.log("enterd for register:",data);
    // clone //
    // const users = [...this.props.users];
    // users.push(data);
    // this.setState({ products });
    if(data){
    this.props.history.push("/login");
    }
  };
  //   schema = {
  //     name: Joi.string()
  //       .alphanum()
  //       .min(3)
  //       .max(30)
  //       .required()
  //       .label("Name")
  //   };
  //   // username = React.createRef();//ref
  // handleSubmit = e => {
  //   // console.log(this.username.current.value);
  //   e.preventDefault();
  //   //validate
  //   // const errors = this.validate();
  //   // //error
  //   // if (errors) {
  //   //   return;
  //   // } else {
  //   // }
  //   //no error
  //   //call backend server
  //   console.log("register");
  // };

  //   validate() {
  //     const res = Joi.validate(this.state.account, this.schema, {
  //       abortEarly: false
  //     });
  //     const errors = {};
  //     //no error
  //     if (res.error === null) return;
  //     //exrtract error information from joi result
  //     for (const item of res.error.details) {
  //       errors[item.path] = item.message;
  //     }
  //     this.setState({ errors });
  //     console.log(this.state.errors);
  //     return errors;
  //   }
  render() {
    const { email, password, secondpassword } = this.state;
    return (
      <div className="container">
         {/* method="POST"
         action="http://localhost:5000/users/register" */}
        <form className="login" onSubmit={this.handleSave} action="">
          <h4 className="login__header">Register An Account</h4>
          <div className="form-group">
            {/* <label for="">E-mail Address</label> */}
            {/* <Input
              label="E-mail Address"
              name="email"
              value={this.state.email}
              onChange={e => this.handleEvent(e)}
              //   error={this.state.errors.email}
            /> */}
            <Input
            required
            id="email"
            label="Email"
            className="form-control"
            margin="normal"
            value={this.state.email}
            name="email"
            onChange={e => this.handleEvent(e)}
          />

          </div>
          <div className="form-row">
            <div className="form-group">
              {/* <label for="">Password</label> */}
              <Input
                label="Password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
            </div>
            <div className="form-group">
              {/* <label for="">Re-enter Password</label> */}
              <Input
                label="Re-enter Password"
                name="secondpassword"
                value={this.state.secondpassword}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
            </div>
          </div>

          <div className="login__remember-me">
            <div className="add-product__actions">
              <button href="#" className="btn btn--gray">
              <Link  to="/productlist">
                Cancel
                </Link> 
              </button>
              <button type="submit" className="btn btn--primary">
                {/* <Link onClick={this.handleSave} to="/login"> */}
                  Register
                {/* </Link> */}
              </button>
            </div>
          </div>
          <a href="#" className="login__register-now">
            You are alredy a member?
          </a>
        </form>
      </div>
    );
  }
}

export default Register;
