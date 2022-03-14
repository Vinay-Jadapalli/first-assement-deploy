import React,{useState} from 'react'
import './List.css'

function List () {
const [state, setState] = useState([
    {id:1, name:"Vinay", Place:"Bangalore"},
    {id:2, name:"Ramesh", Place:"Chennai"},
    {id:3, name:"Rajeev", Place:"Mumbai"},
    {id:4, name:"Raja", Place:"Andhra Pradesh"},
])
    return(
        <div className='test'>
            {state.map((test) => (
                <div className="test-name" key={test.id}>
                    <h2>{test.name}</h2>
                    <p>Curren Loaction {test.Place}</p>
                </div>
            ))}
        </div>
    );
}

export default List;