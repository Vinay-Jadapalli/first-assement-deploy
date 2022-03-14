import React, {useState} from 'react';
import './Search.css'

const Search=()=> {

    const people = [
        {
            id:1,
            name:"vinay",
            email:"vinayvinn70@gmail.com"
        },
        {
            id:2,
            name:"Pranay",
            email:"Pranay70@gmail.com"
        },
        {
            id:3,
            name:"Rajeev",
            email:"Rajeev123@gmail.com"
        },
        {
            id:4,
            name:"Raja",
            email:"Raja123@gmail.com"
        },
    ]

    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
      };
    

    const filtered = !search ? people : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filtered)


    return(
        <div className='search'>
            <h3 style={{"color":"blue"}}>Search and Filter Method</h3>
            <input type="text" value={search}  onChange={handleSearchChange} />
            <h4><b>Person Details</b></h4>
            {filtered.map((person) => {
                return (
                    <p key={person.id}>
                       <b>{person.name}</b> : {person.email} 
                        </p>
                );
            })}
       </div>
    );
}

export default Search;