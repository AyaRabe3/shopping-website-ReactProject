import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Input from "./input";
// import SearchResult from "./searchResult";
import axios from "axios";
import {Searching,GetAll} from "./services/products"
class Search extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: ""
    ,products:[]
  };
  // {onChange,onSearch}=props;
  this.handleSearch = this.handleSearch.bind(this);

  this.handleEvent = this.handleEvent.bind(this);
  {
    /* check if can be removed */
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);

}

handleEvent = e => {
  this.setState({query:[e.target.name],[e.target.name]: e.target.value });
};

handleSearch = e => {
  this.setState({query:[e.target.name],[e.target.name]: e.target.value });
};


handleSubmit = e => {
  e.preventDefault();
  // get our form data out of state
  const { name } = this.state;
// debugger;
  // axios.post("http://localhost:5000/products/search", { name }).then(result => {
  //   console.log( "searching about :",this.state.name);
  //   console.log( "searchingg:",name);
  // });
};
handleSave = async (e) => {
  e.preventDefault();
  const {name}=this.state;
  console.log("hiiiii :",this.state.name);
  const data = await Searching(name);
  console.log("enterd for search:",data);
  console.log("show all products",{...this.props.products})
  this.setState({ products:data});

}
async componentDidMount() {
  const data = await Searching(this.state);
  // const all = { id: 0, name: "All" };
  // let filter = await GetAllTypes();
  // const newFilter = [all, ...filter];
  this.setState({ product: data});

  //console.log(this.state.products);
}

handleChange = e => {
  const {name, value} = e.target;
  const newProduct = {
    ...this.state.products,
    [name]: value
   }
   this.setState({
       products:newProduct
   })
}
render (){
      return(
        // method="POST"
        // action="http://localhost:5000/products/search" 
        <form onSubmit={this.handleSave} >
        <div className="search-box">
          {/* <input
            className="search-box__input"
            onChange={this.handleSubmit}
            type="text"
            placeholder="Search.."
            name="search"
          /> */}

          <Input
                label="search"
                placeholder="Search.."
                name="name"
                value={this.state.name}
                onChange={e => this.handleSearch(e)}
                //   error={this.state.errors.email}
              />
          <button type="submit" to="/productlist"  className="search-box__btn">  
            {/* <Link onClick={this.handleSave} to="/productlist"> */}
            <i className="fas fa-search"></i>
             {/* </Link>   */}
          </button>
        </div>
        {/* //<button type="submit">Search</button> */}
    
        </form>
        
      );
      }

    }


  

export default Search;
