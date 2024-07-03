import axios from "axios";

const commonApi = (endPoint:any,data:any)=>{
    return axios.post(`http://localhost:4000/${endPoint}`,data)
}

export default commonApi