import axios from "axios";
import React, { useEffect, useState } from "react";
function Viewmenu() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        // Replace 'apiUrl' with the actual URL of the server endpoint
        const apiUrl = 'http://172.20.10.3:8080/allmenu';

        axios.post(apiUrl)
            .then((response) => {
                // Handle the successful response here
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
            });
    }, []);

    //Delete Data
const handleDelete = (id) => {
    axios
    .post('http://localhost:8080/allmenu')
    .then((response) => {
      console.log('Deleted Menu ID:', id);
      console.log('Menu deleted successfully');
      // Optionally, you can perform any additional actions or state updates here
    })
    .catch((error) => {
      console.error('Error deleting menu:', error);
      // Handle the error as needed
    });
  };

    const filteredData = data.filter((item) =>
        item.days.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Breakfast.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Lunch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Dinner.toLowerCase().includes(searchTerm.toLowerCase()) 
        
        //(typeof item.handler_contact_number.toLowerCase() === searchTerm.toLowerCase())
        //item.handler_contact_number.toLowerCase().includes(searchTerm.toLowerCase()) 
        
    );

    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='card'>

                        {/* <div className='card-body'></div> */}
                        <div className='mb-3 d-flex align-items-center'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' , marginRight:'10px'}}>Search Menu: </label>
                            <input
                                type='text'
                                autoComplete='off'
                                placeholder="Search Here"
                                className='form-control col-md-3'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                id='search'
                                style={{ fontSize: '16px', padding: '10px' , width:'50%'}}
                            /><br></br>
                        </div> {filteredData.length === 0 ? (
              <p>No Results Found</p>
            ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>

                                    <th scope="col">Days</th>
                                    <th scope="col">Breakfast</th>
                                    <th scope="col">Lunch</th>
                                    <th scope="col">Dinner</th>
                                    
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.days}</th>
                                        <td>{item.Breakfast}</td>
                                        <td>{item.Lunch}</td>
                                        <td>{item.Dinner}</td>
                                        
                                        <td>
                                              
                                              <button onClick={() => handleDelete(item._id)} className="btn btn-danger btn-sm">
                                                  Delete
                                              </button></td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Viewmenu;