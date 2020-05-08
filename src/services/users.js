import Axios from "axios";
import axios from "axios";

export const Add = async function(user) {
  const { data } = await Axios.post(
    "http://localhost:5000/users/register",
    user
  );
  // if(data){
  console.log( "new user :",data);
  return data;
  // }
  // else{
  //   alert("Wrong Email or Password ,please try again to register")

  // }

};

export async function LogIn(currentUser) {
    const loginEndPoint =  "http://localhost:5000/users/login";
    const response =await axios.post(loginEndPoint,currentUser).catch(err=>console.log(err));
    if(response){
    console.log("hey",response.data)
    const {token ,user} = response.data;
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user)); 
    localStorage.setItem("id",JSON.stringify(user.id));

    // axios.defaults.headers.common["Authorization"]=token;
  console.log("userId",user.id);
  console.log(response.data);
  console.log("login from react done")
    return response.data;
    }
    alert("Wrong Email or Password ,please try again")
}
//////////////////////////////
export const GetUserById = async function(id) {
  const token = localStorage.getItem("token");
  const { data } = await Axios.get(`http://localhost:5000/users/${id}`,{
    headers:{
        'authorization':token
    }
  });
  console.log(data);
  return data;
};