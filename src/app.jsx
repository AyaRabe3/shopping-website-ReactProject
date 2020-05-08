import React, { Component } from "react";
import _ from "lodash";
import Header from "./header";
import DetailsProduct from "./detailsprodouct";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import AddProduct from "./addproduct";
import EditProduct from "./editproduct";
import Home from "./productslist";
import ContactUs from "./contactUs";
import About from "./about";
import NotFound from "./not-found";
import { GetAllTypes } from "./services/types";
import { GetAll, Delete ,Searching } from "./services/products";
import Register from "./register";
import SearchResult from "./searchReasult";
class App extends Component {
  state = {
    products: [],
    users: [],
    pageSize: 6,
    currentPage: 1,
    filter: [],
    currentType: 0,
    query: "",

    contentPage: [2, 3]
    // product: {
    //   name: "",
    //   description: "",
    //   price: "",
    //   typeId: ""
    // }
  };
  async componentDidMount() {
    const data = await GetAll();
    const all = { id: 0, name: "All" };
    let filter = await GetAllTypes();
    const newFilter = [all, ...filter];
    this.setState({ products: data, filter: newFilter });

    //console.log(this.state.products);
  }
  handleChangePage = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  handleFilter = id => {
    this.setState({ currentType: id, currentPage: 1 });
    console.log(id);
  };

  // handleChangeSearch =async(e) => {
  //   console.log("search here");
  //   console.log(e.target.value);
  //   this.setState({ query: e.target.value });
  // };
  // handleSearch = async(e)=> {
  //   console.log("search",this.state.query);
  //   const beforeSearching=[...this.state.products]
  //   const productName=this.state.query;
  //   // console.log(e.target.value);
  //   const products =await Searching(productName)
  //   console.log("searching resault",products)
  //   this.setState({ products });
  // };
  


  handleDelete = item => {
    //back end
    Delete(item.id);
    //clone state products
    let products = [...this.state.products];
    //edit
    products = products.filter(i => i.id !== item.id);
    //setState after delete one
    this.setState({ products });
  };
  render() {
    let {
      products,
      pageSize,
      currentPage,
      filter,
      currentType,
      users
    } = this.state;
    let filteredProduct = products;
    if (currentType === 0) {
    } else {
      filteredProduct = products.filter(
        product => product.typeId === currentType
      );
    }
    let searchedProduct = filteredProduct;
    if (this.state.query !== "") {
      searchedProduct = filteredProduct.filter(e =>
        e.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
    }
    //console.log(contentPageType);
    //pagination
    const startIndex = (currentPage - 1) * pageSize;
    // const contentPage = _.slice(table, startIndex, pageSize+startIndex);
    let contentPage = _(searchedProduct)
      .slice(startIndex)
      .take(pageSize)
      .value();
    // contentPage = contentPageType
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/about" render={props => <About {...props}></About>} />
          <Route path="/contactus" component={ContactUs} />
          <Route
            path="/addproduct"
            render={props => <AddProduct {...props} products={products} />}
          />
          <Route
            path="/editproduct/:id?"
            render={props => <EditProduct {...props} products={products} types={filter} />}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/register"
            render={props => <Register {...props} users={users} />}
          />
          <Route
            path="/detailsproduct/:id?"
            render={props => <DetailsProduct {...props} />}
          />
          
          <Route
            path="/productlist"
            render={() => (
              <Home
                count={searchedProduct.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onChange={this.handleChangePage}
                contentPage={contentPage}
                products={products}
                filter={filter}
                currentType={currentType}
                onFilter={this.handleFilter}
                onSearch={this.handleSearch}
                onDelete={this.handleDelete}
              />
            )}
          />
          <Route path="/notfound" component={NotFound}></Route>
          {/* <Route path="/home" exact component={Home} /> */}
          {/*exact or switch  */}
          <Redirect from="/home" to="/productlist"></Redirect>
          <Redirect from="/" to="/productlist"></Redirect>
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
