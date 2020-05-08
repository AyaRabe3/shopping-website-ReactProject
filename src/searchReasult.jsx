import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import Pagination from "./pagination";
import Filter from "./filter";
import Search from "./search";
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products:[]
        };
        // this.props.product=this.state.products
    }
  render() {
    // console.log(this.props.filter);
    return (
<section className="item-listing">
<div className="item-listing__items item-listing--3items">
{/* <!-- medium item --> */}
{this.props.contentPage.map(product => (
  <Card
    key={product.id}
    onDelete={this.props.onDelete}
    product={product}
  />
))}
{/* } */}
{/* <div className="item-medium-1">
  <div className="item-medium-1__alert">Sale</div>
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div className="flex-row">
      <div>
        <del>$325</del>
        <span className="lable">$299</span>
      </div>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div className="item-medium-1__alert">Sale</div>
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div className="item-medium-1__alert">Sale</div>
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1">
  <div className="item-medium-1__alert">Sale</div>
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div>
<div className="item-medium-1"> */}
{/* <div className="item-medium-1__alert">Sale</div>
  <div
    className="item-medium-1__image image"
    style={{
      backgroundImage: " url('img/products/product-grey-1.jpg')"
    }}
  >
    <a href="#" className="item-medium-1__action">
      Add to Cart
    </a>
  </div>
  <a href="#">
    <h4>Photo Camera</h4>
    <div>
      <del>$325</del>
      <span className="lable">$299</span>
    </div>
  </a>
  <div className="crud-actions">
    <a href="#">
      <i className="far fa-eye"></i>
    </a>
    <a href="#">
      <i className="fas fa-edit"></i>
    </a>
    <a href="#">
      <i className="fas fa-trash-alt"></i>
    </a>
  </div>
</div> */}
</div>
{this.props.pageSize < this.props.count && (
            <Pagination
              count={this.props.count}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onChange={this.props.onChange}
            ></Pagination>
          )}
  </section>
)}
}


export default SearchResult;