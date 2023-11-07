import React, { useState, useEffect } from "react";
import axios from "axios";

function Bar() {
  console.log("anvi")
  const [data, setData] = useState({});

  useEffect(() => {
    const apiUrl = 'http://172.20.10.3:8080/ganalysis';

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
              <img src="/assets/images/logos/curr.png" height={60} width={60} alt="remain" />
            </div>
            <h5 className="card-title mb-9 fw-semibold text-center">Total Current Bookings</h5>
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h4 className="fw-semibold mb-3">{Number(data.number_of_current_booking) || 0}</h4>
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
                      <img src="/assets/images/logos/guest.png" height={60} width={60} alt="remain" />
                    </div>
                    <h5 className="card-title mb-9 fw-semibold">Total Guests Enrolled</h5>
                    <div className="row align-items-center">
                      <div className="col-8 text-center">
                        <h4 className="fw-semibold mb-3">{Number(data.total_of_guest) || 0}</h4>
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
                      <img src="/assets/images/logos/mel.png" height={60} width={60} alt="remain" />
                    </div>
                    <h5 className="card-title mb-9 fw-semibold">Total Meal Booked per Person</h5>
                    <div className="row align-items-center">
                      <div className="col-8 text-center">
                        <h4 className="fw-semibold mb-3">{Number(data.total_pepole) || 0}</h4>
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
            <img src="/assets/images/logos/rem.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Guest Remained Of Lunch</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.total_number_of_remaining_lunch) || 0}</h4>
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
            <img src="/assets/images/logos/right.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Guest Who Had Lunch</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.total_number_of_having_lunch) || 0}</h4>
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
            <img src="/assets/images/logos/money.png" height={60} width={60} alt="remain" />
          </div>
          <h5 className="card-title mb-9 fw-semibold">Total Money Earned Today</h5>
          <div className="row align-items-center">
            <div className="col-8 text-center">
              <h4 className="fw-semibold mb-3">{Number(data.total_money_for_this_day) || 0}</h4>
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

      



        {/* Other similar code blocks for different data */}

      
    </>
  );
}

export default Bar;
