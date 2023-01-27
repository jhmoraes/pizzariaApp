import axios from "axios";
import { useQuery } from "react-query";


const Requests = () =>{

    const {data} = useQuery("todos", () =>{
        return axios
        .get(`${BASE_URL_PRODUCT}/products`)
        .then((resp)=>{console.log(resp.data)})
        .catch((err)=>{console.log(err)})
    })
}

Requests()

console.log("aqui")