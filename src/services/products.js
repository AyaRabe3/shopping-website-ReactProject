import Axios from "axios";
import axios from "axios";
export const GetAll = async function() {
  const { data } = await Axios.get("http://localhost:5000/products");
  // console.log(data);
  return data;
};
export const GetById = async function(id) {
  const token = localStorage.getItem("token");
  const { data } = await Axios.get(`http://localhost:5000/products/${id}`,{
    headers:{
        'authorization':token
    }
  });
  console.log(data);
  return data;
};

////search by post method
// export const Searching = async function( name) {
//   const { data } = await Axios.post(`http://localhost:5000/products/search`,name);
//   console.log(data);
//   return data;
// };

///search by get method
export const Searching = async function( searchProduct) {
  const { data } = await Axios.get(`http://localhost:5000/products/search/${searchProduct}`);
  console.log(data);
  return data;
};


export const Update = async function(item, id) {
  const token = localStorage.getItem("token");
  const { data } = await Axios.patch(`http://localhost:5000/products/${id}`, item,{
    headers:{
        'authorization':token
    }
  });
  return data;
 
};

export const Delete = async function(id) {
  const token = localStorage.getItem("token");
  const { data } = await Axios.delete(`http://localhost:5000/products/${id}`,{
    headers:{
        'authorization':token
    }
  });

};
// export async function Delete(id) {
//   const token = localStorage.getItem("token");
//   const { data } = await axios.delete(`http://localhost:5000/products/${id}`,{
//     headers:{
//         'authorization':token
//     }
//   });
//   return data;

// };

export async function Add(product){
    const token = localStorage.getItem("token");
    console.log("user token :",token);
    const {data} = await axios.post("http://localhost:5000/products/",product,
    {
        headers:{
            'authorization':token
        }
    });
    // if(data){
    return data;
    // }
    // else{
      // alert("OOPS!!..something went wrong please try again")
    // }
}