import { GetById } from "./services/products";
import React, { Component } from "react";
class DetailsProduct extends Component {
  state = {
    product:{
      name: "",
      price: 0,
      discount: 0,
      description: "",
      image: " url('img/products/product-grey-1.jpg')"
    }
  };
  // async componentDidMount() {
  //   const itemId = this.props.match.params.id;
  //   let item = await GetById(itemId);
  //   this.setState({ item });
  // }



  async componentDidMount() {
  const productId = this.props.match.params.id;
  console.log("productId",this.props.match.params);
  const product = await GetById(productId);
  this.setState({ product});
  console.log(product.name);
  }
  
  render() {
    // console.log(`"${this.state.product.image}"`);
    return (
      <React.Fragment>
        <div className="product-details container">
          <section className="product-details__main">
            <div className="slider">
              <div className="slider__items">
                <div
                  className="slider__item active"
                  style={{
                    backgroundImage: `"${this.state.product.image}"`
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: `"${this.state.product.image}"`
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: `"${this.state.product.image}"`
                  }}
                ></div>
              </div>
              <div className="slider__indicators">
                <span className="slider__indicator active"></span>
                <span className="slider__indicator"></span>
                <span className="slider__indicator"></span>
              </div>
            </div>

            <div className="product-details__info">
              <h1>{this.state.product.name}</h1>
              <div className="rating">
                <div className="rating__stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <div className="rating__data">2 reviews</div>
              </div>

              <div className="product-details__amount">
                ${this.state.product.price}
              </div>

              <p className="product-details__desc">
                {this.state.product.description}
              </p>
              <div className="product-details__add">
                <div className="increment-control">
                  <a href="#" className="increment-control__action">
                    -
                  </a>
                  <input
                    type="text"
                    className="form-control"
                    title="Qty"
                    value="1"
                  />
                  <a href="#" className="increment-control__action">
                    +
                  </a>
                  <div />

                  <button href="#" className="btn btn--primary">
                    Add to cart
                  </button>
                  <div />

                  <div className="product-details__meta">
                    Categories:{" "}
                    <a rel="tag" href="#">
                      Accessories
                    </a>
                    ,{" "}
                    <a rel="tag" href="#">
                      Bags
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tabs">
            <div className="tabs__headers">
              <div className="tabs__header active">Description</div>
              <div className="tabs__header">Additional Information</div>
              <div className="tabs__header">Reviews (2)</div>
            </div>
            <div className="tabs__bodies">
              <div className="tabs__body active">
                <div className="product-details__desc">
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce sagittis, massa fringilla
                    consequat blandit, mauris ligula porta nisi, non tristique
                    enim sapien vel nisl. Suspendisse vestibulum lobortis
                    dapibus.
                  </p>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce sagittis, massa fringilla
                    consequat blandit, mauris ligula porta nisi, non tristique
                    enim sapien vel nisl. Suspendisse vestibulum lobortis
                    dapibus. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae;
                  </p>
                </div>
              </div>
              <div className="tabs__body ">tab2</div>
              <div className="tabs__body">tab3</div>
            </div>
          </section>
          <div className="separator"></div>

          <section className="realated-product">
            <h3>
              Related <strong>Products</strong>
            </h3>
            <div className="item-listing__items item-listing--4items">
              <div className="item-medium-1">
                <div
                  className="item-medium-1__image image"
                  style={{
                    backgroundImage: `"${this.state.product.image}"`
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
                    backgroundImage: `"${this.state.product.image}"`
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
                    backgroundImage: `"${this.state.product.image}"`
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
                    backgroundImage: `"${this.state.product.image}"`
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
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailsProduct;
