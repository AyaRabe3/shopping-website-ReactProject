import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { Add } from "./services/products";
import { GetUserById } from "./services/users";
import { GetAllTypes } from "./services/types";
import { Link } from "react-router-dom";
import axios from "axios";
// import  {j} from ''
// debugger;
class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        name: "",
        price: "",
        description: "",
        typeId: 0,
        image: "url('img/product-1.jpg')",
        discount:"",
        status:"",
        tags:"",
        categoryId:"",
        userId:""
      },
      types: [],
      errors: {}
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
    
    const { name,description,price,discount,status,image,tags,categoryId } = this.state;

    axios.post("http://localhost:5000/products/", { name,description,price,discount,status,image,tags,categoryId }).then(result => {
      console.log( "product :",this.name);
      console.log( "product:",name);
    });
  };

   handleSave = async (e) => {
    e.preventDefault();
    console.log(this.state);
    // const { email, password, secondpassword } = this.state.user;
     this.state.product.userId =localStorage.getItem("id");
    console.log("user idddddddd from local", this.state.product.userId);
    // const {id}=user;
    // const userId=user;
    // const userId=this.props.match.params.id;
    // console.log("user idddddddd from params", this.state.product.userId );
    // const user = await GetUserById(userId);
    // this.state.product.userId=userId;
    console.log("this user id ",this.state.product.userId);
    // this.state.uerId=user.id;
    // this.setState({ userId});
    console.log("prdo before add", this.state.product)
    const data = await Add(this.state);
    console.log("enterd for add:",data);
    //clone
    // const product = [...this.props.products];
    // product.push(data);
    this.setState({ product:data});
    if(data){
      this.props.history.push("/productlist");
      }
  };
  
  async componentDidMount() {
    const types = await GetAllTypes();
    this.setState({ types });
  }




  // validate() {
  //   const res = Joi.validate(this.state.account, this.schema, {
  //     abortEarly: false
  //   });
  //   const errors = {};
  //   //no error
  //   if (res.error === null) return;
  //   //exrtract error information from joi result
  //   for (const item of res.error.details) {
  //     errors[item.path] = item.message;
  //   }
  //   this.setState({ errors });
  //   console.log(this.state.errors);
  //   return errors;
  // }
  // validateProperty(input) {
  //   //sub object
  //   const obj = { [input.name]: input.value };
  //   //sub schema
  //   const schema = { [input.name]: this.schema[input.name] };
  //   const res = Joi.validate(obj, schema, { abortEarly: false });
  //   const errors = { ...this.state.errors }; //clone
  //   if (res.error) {
  //     errors[input.name] = res.error.details[0].message;
  //   } else {
  //     delete errors[input.name];
  //   }
  //   this.setState({ errors });
  // }
  render() {
    console.log(this.state.product.typeId);
    // console.log(this.props.products);   
     const { name,description,price,discount,status,image,tags,categoryId } = this.state;

    return (

      <div className=" container">
        {/* method="POST"
         action="http://localhost:5000/products/" */}
        <form
          className="add-product"
          // onSubmit={e => this.handleSubmit(e)}
          // action=""
          onSubmit={this.handleSave} 
          action=""
        >
          <div className="add-product__images slider">
            <div className="add-product__image-actions">
              <div className="add-product__image-action">
                <a href="#">
                  <i className="fas fa-plus-square"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="slider__items">
              <div
                className="slider__item active"
                style={
                  {backgroundImage: `"${this.state.image}"`}

                     }
              ></div>
              <div
                className="slider__item"
                style={
                  {backgroundImage: `"${this.state.image}"`}
                }
              ></div>
              <div
                className="slider__item"
                style={
                  {backgroundImage: `"${this.state.image}"`}
                }
              ></div>
            </div>
            <div className="slider__indicators">
              <span className="slider__indicator active"></span>
              <span className="slider__indicator"></span>
              <span className="slider__indicator"></span>
            </div>
          </div>
          <div className="add-product__data">
            <div className="form-controls">
              <section className="tabs">
                <div className="tabs__headers">
                  <div className="tabs__header active">English</div>
                  <div className="tabs__header">Arabic</div>
                </div>
                <div className="tabs__bodies">
                  <div className="tabs__body active">
                    <div className="form-group ">
                      {/* <Input
                        //type="text"
                        label="Name"
                        name="name"
                        value={this.state.product.name}
                        onChange={e => this.handleChange(e)}
                        error={this.state.errors.name}
                      /> */}
                <Input
                label="name"
                name="name"
                value={name}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        label="description"
                         name="description"
                        value={description}
                        onChange={e => this.handleEvent(e)}
                        // value={this.state.product.description}
                        // onChange={e => this.handleChange(e)}
                        // error={this.state.errors.description}
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="tabs__body ">
                    <div className="form-group invalid">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>

              <div className="form-group">
                {/* <label htmlFor="">Price</label> */}
                {/* <Input
                  //type="text"
                  label="Price"
                  name="price"
                  value={this.state.product.price}
                  onChange={e => this.handleChange(e)}
                  error={this.state.errors.price}
                /> */}
                <Input
                type="text"
                label="price"
                name="price"
                value={price}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
              </div>
              <div className="add-product__discount">
                <div className="form-group">
                  <label htmlFor="">Satus</label>
                  <div className="form-group__radios">
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>On Sale</span>
                    </div>
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>Not On Sale</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Discount</label>
                  {/* <input className="form-control" type="text" name="" id="" /> */}
                  <Input
                label="Discount"
                name="discount"
                value={discount}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Payment Types</label>
                <div className="form-group__checkboxs">
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Direct Bank Transfare</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Cheque Payment</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Paypal</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Visa</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Mastercard</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>On Dilivery</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Category</label>
                {/* <select className="form-control" name="" id="">
                  <option value="">Arts & Crafts</option>
                  <option value="">Automotive</option>
                  <option value="">Baby</option>
                  <option value="">Books</option>
                  <option value="">Eletronics</option>
                  <option value="">Women's Fashion</option>
                  <option value="">Men's Fashion</option>
                  <option value="">Health & Household</option>
                  <option value="">Home & Kitchen</option>
                  <option value="">Military Accessories</option>
                  <option value="">Movies & Television</option>
                  <option value="">Sports & Outdoors</option>
                  <option value="">Tools & Home Improvement</option>
                  <option value="">Toys & Games</option>
                </select> */}
                <select
                  className="form-control"
                  name="categoryId"
                  // onChange={this.handleChange}
                  onChange={e => this.handleEvent(e)}
                >
                  {this.state.types.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="taged-textbox form-group">
                <label className="taged-textbox__lable" htmlFor="">
                  Tags
                </label>
                <div className="taged-textbox__data">
                  <div className="taged-textbox__tags">
                    <div className="taged-textbox__tag">
                      <span>tag1</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag2</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag3</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag4</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag5</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag6</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag7</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag8</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag9</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag10</span>
                      <a className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                  </div>
                  <div className="taged-textbox__clear">
                    <a href="#">
                      <i className="fas fa-times"></i>
                    </a>
                  </div>
                </div>
                {/* <input
                  className="taged-textbox__textbox form-control"
                  type="text"
                  name=""
                  id=""
                /> */}
                 <Input
                 className="taged-textbox__textbox form-control"
                name="tags"
                value={tags}
                onChange={e => this.handleEvent(e)}
                //   error={this.state.errors.email}
              />
              </div>
              <div className="add-product__actions">
                <button href="#" className="btn btn--gray">
                  <Link  to="/productlist">
                  Cancel
                  </Link>
                </button>
                <button type="submit"  to="/productlist" className="btn btn--primary">
                  {/* <Link onClick={this.handleSave} to="/productlist"> */}
                    Add
                  {/* </Link> */}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;