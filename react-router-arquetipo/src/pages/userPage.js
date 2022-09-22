import { useParams } from "react-router-dom";

export default function UserPage(){
    
    const {id} = useParams()
    console.log(id);

    return (
        <div>
            user<h1>{id}</h1>
        </div>
    )

}