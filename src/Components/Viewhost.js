
import axios from "axios";
import React, { useEffect, useState } from "react";
function Viewhost() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        // Replace 'apiUrl' with the actual URL of the server endpoint
        const apiUrl = 'http://172.20.10.3:8080/showho';

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
const handleDelete = (contact) => {
    axios
    .post(`http://192.168.43.54:8080/showme`)
    .then((response) => {
      console.log('Deleted Hosteller ID:', contact);
      console.log('Hosteller deleted successfully');
      // Optionally, you can perform any additional actions or state updates here
    })
    .catch((error) => {
      console.error('Error deleting hosteller:', error);
      // Handle the error as needed
    });
  };

    const filteredData = data.filter((item) =>
        item.hosteler_fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hosteler_lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hosteler_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.room_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hosteler_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hostel_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //(typeof item.handler_contact_number.toLowerCase() === searchTerm.toLowerCase())
        //item.handler_contact_number.toLowerCase().includes(searchTerm.toLowerCase()) 
        (typeof item.hosteler_contact_number === 'string' && item.hosteler_contact_number.includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='card'>

                        {/* <div className='card-body'></div> */}
                        <div className='mb-3 d-flex align-items-center'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' , marginRight:'10px'}}>Search Hostellers: </label>
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
              <p>No results found</p>
            ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>

                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">ROom Number</th>
                                    <th scope="col">Hostel Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.hosteler_fname}</th>
                                        <td>{item.hosteler_lname}</td>
                                        <td>{item.hosteler_email}</td>
                                        <td>{item.hosteler_contact_number}</td>
                                        <td>{item.room_no}</td>
                                        <td>{item.hostel_type}</td>
                                        <td>
                                              
                                              <button onClick={() => handleDelete(item.hosteler_contact_number)} className="btn btn-danger btn-sm">
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

export default Viewhost;