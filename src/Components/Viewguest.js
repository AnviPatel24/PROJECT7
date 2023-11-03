
import axios from "axios";
import React, { useEffect, useState } from "react";
function Viewguest() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        // Replace 'apiUrl' with the actual URL of the server endpoint
        const apiUrl = 'http://192.168.43.54:8080/showgh';

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
                console.log('Deleted Guest ID:', contact);
                console.log('Guest deleted successfully');
                // Optionally, you can perform any additional actions or state updates here
            })
            .catch((error) => {
                console.error('Error deleting Guest:', error);
                // Handle the error as needed
            });
    };

    const filteredData = data.filter((item) =>
        item.guest_fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.guest_lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.guest_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //(typeof item.guest_contact_number.toLowerCase() === searchTerm.toLowerCase())
        //item.guest_contact_number.toLowerCase().includes(searchTerm.toLowerCase()) 
        (typeof item.guest_contact_number === 'string' && item.guest_contact_number.includes(searchTerm.toLowerCase()))
    );
    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='card'>

                        {/* <div className='card-body'></div> */}
                        <div className='mb-3 d-flex align-items-center'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' , marginRight:'10px'}}>Search Guests: </label>
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
                        </div>
                        {filteredData.length === 0 ? (
                            <p>No results found</p>
                        ) : (
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact Number</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.guest_fname}</th>
                                            <td>{item.guest_lname}</td>
                                            <td>{item.guest_email}</td>
                                            <td>{item.guest_contact_number}</td>
                                            <td>

                                                <button onClick={() => handleDelete(item.guest_contact_number)} className="btn btn-danger btn-sm">
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

export default Viewguest;