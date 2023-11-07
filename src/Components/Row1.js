import React, { useState, useEffect } from "react";
import axios from "axios";

function Row1() {
  console.log("anvi")
  const [data, setData] = useState({});

  useEffect(() => {
    const apiUrl = 'http://172.20.10.3:8080/analysis';

    axios.post(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid d-flex">
      <div className="col-lg-4">
  <div className="col-lg-10 mb-4">
    <div className="row">
      <div className="col-lg-12">
        <div className="card overflow-hidden bg-danger">
          <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center mb-3">
              <img src="/assets/images/logos/subdone.png" height={60} width={60} alt="remain" />
            </div>
            <h5 className="card-title mb-9 fw-semibold text-center">Total Number of Bookings</h5>
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h4 className="fw-semibold mb-3">{Number(data.total_current_booking) || 0}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="col-lg-4">
          <div className="col-lg-10 mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>
                  <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center mb-3">
                      <img src="/assets/images/logos/hostel.png" height={60} width={60} alt="remain" />
                    </div>
                    <h5 className="card-title mb-9 fw-semibold">Total Number of Hostellers</h5>
                    <div className="row align-items-center">
                      <div className="col-8 text-center">
                        <h4 className="fw-semibold mb-3">{Number(data.total_number_hosteler) || 0}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">

          <div className="col-lg-10 mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(201, 108, 133, 0.8)' }}>
                  <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center mb-3">
                      <img src="/assets/images/logos/submit.png" height={60} width={60} alt="remain" />
                    </div>
                    <h5 className="card-title mb-9 fw-semibold">Students Left to Submit Names</h5>
                    <div className="row align-items-center">
                      <div className="col-8 text-center">
                        <h4 className="fw-semibold mb-3">{Number(data.total_number_of_remaining_submit_from) || 0}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other similar code blocks for different data */}

      </div>

      <div className="container-fluid d-flex">

      <div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(95, 177, 255, 0.75)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/curr.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Current Bookings for Breakfast</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.current_booking_for_breakfast) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


<div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(255, 177, 255, 0.75)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/curr.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Current Bookings for Lunch</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.current_booking_for_lunch) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



<div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(255,244,83,0.75)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/curr.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Current Bookings for Dinner</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.current_booking_for_dinner) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

        {/* Other similar code blocks for different data */}

      </div>

      <div className="container-fluid d-flex">

      <div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(38, 65,101, 0.7)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/rem.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Students Left for Breakfast</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.remaining_student_for_having_breakfast_attendance) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



<div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(105,65,101,0.7)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/rem.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Students Left for Lunch</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.remaining_student_for_having_lunch_attendance) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



<div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden " style={{ backgroundColor: 'rgba(242, 180, 173, 0.6)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/rem.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Students Left for Dinner</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.remaining_student_for_having_dinner_attendance) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


        {/* Other similar code blocks for different data */}

      </div>

      <div className="container-fluid d-flex">

      <div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(0,19,50,0.37)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/right.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Total Students for Breakfast</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.total_number_student_for_having_breakfast_attendance) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


<div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(0,81,50,0.37)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/right.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Total Students for Lunch</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.total_number_student_for_having_lunch_attendance) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



<div className="col-lg-4">

<div className="col-lg-10 mb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="card overflow-hidden" style={{ backgroundColor: 'rgba(0,81,179,0.37)' }}>
        <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-3">
            <img src="/assets/images/logos/right.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Total Students for Dinner</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.total_number_student_for_having_dinner_attendance) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


        {/* Other similar code blocks for different data */}

      </div>
    </>
  );
}

export default Row1;
