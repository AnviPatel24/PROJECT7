import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Row1 from "./Components/Row1";
import Stud from "./Components/Stud";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Routes, Route,  Navigate } from 'react-router-dom';
import Login from "./Components/Login";
//import Regotp from "./Components/Regotp";
import Addmenu from "./Components/Addmenu";
import { useEffect,useState } from "react";




function App() {
  const [myVariable, setMyVariable] = useState(localStorage.getItem('loginid'));
  if (!myVariable && window.location.pathname !== "/Login") {
    console.log("User not logged in ");
    window.location.href = "/Login";
  }
  useEffect(() => {
    function checkUserData() {
      const userLogged = localStorage.getItem('loginid');
      
  
      console.log("local", localStorage.getItem('loginid'));
      console.log(userLogged);
  
      
    }
  
    // Initial check when component mounts
    checkUserData();
  
    // Listen for changes in localStorage
    window.addEventListener("storage", checkUserData);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);
  

  

  return (
    <>
    {/* <h1>{myVariable}</h1> */}
      {myVariable ? (
        // is user login then --> Dashboard Page 

        // Old code

        <Router>
          <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed">
            <Navbar></Navbar>
            <div className="body-wrapper">
              <Header></Header>
              <Routes>
                <Route path="/Stud" element={<Stud></Stud>}></Route>
                <Route path="/Login" element={myVariable? <Stud/> : <Navigate to='/Dash'/>}></Route>
            
                {myVariable ? (
                  //Dashboard
                  // logout route
                  <Route path="/Stud" element={<Stud></Stud>}></Route>

                ) : (
                  <>

                    <Route path="/Stud" element={<Stud></Stud>}></Route>
                    <Route path="/Dash" element={<Row1></Row1>}></Route>

                    <Route path="/AddMenu" element={<Addmenu></Addmenu>}></Route>
                    <Route path="/Login" element={<Login></Login>}></Route>
                  </>
                )}

              </Routes>

            </div>
          </div>
        </Router>
      ) : (

        <Router>

          {/* If user not login --> Then login.js page */}
          {/* Display Login   */}


          <div className="body-wrapper">

            <Routes>
              <Route path="/Stud" element={myVariable? <Stud/> : <Navigate to='/Login'/>}>
                
              </Route>

              {myVariable ? (
                //Dashboard
                // logout route
                <Route path="/Stud" element={<Stud></Stud>}></Route>

              ) : (
                <>


                  <Route path="/Stud" element={<Stud></Stud>}>
                    
                  </Route>
                  <Route path="/Dash" element={<Row1></Row1>}></Route>

                  <Route path="/AddMenu" element={<Addmenu></Addmenu>}></Route>
                  <Route path="/Login" element={<Login></Login>}></Route>
                </>
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>

          </div>

        </Router>
      )}

      <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
      <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="../assets/js/sidebarmenu.js"></script>
      <script src="../assets/js/app.min.js"></script>
      <script src="../assets/libs/apexcharts/dist/apexcharts.min.js"></script>
      <script src="../assets/libs/simplebar/dist/simplebar.js"></script>
      <script src="../assets/js/dashboard.js"></script>
    </>
  );
}

export default App;