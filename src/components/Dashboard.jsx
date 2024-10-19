import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    let isValid = true;

    if(isValid){
      navigate("/login")
    }
  }
  return (
    <div className="dashboard">
      <main className="col-md-9 ms-5 col-lg-10 px-md-4 pt-5 pb-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap  pt-3 pb-2 mb-3 div-1">
          <h1 className="h2">
            {" "}
            <a className="navbar-brand" href="#">
              <MdOutlinePets className="icon" />
            </a>
            Dashboard
          </h1>
        </div>
        <h2 className="mb-3">All pets</h2>
        <div className="table-responsive small">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Pet</th>
                <th scope="col">Spicie</th>
                <th scope="col">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Luna</td>
                <td>Dog</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>Ziggy</td>
                <td>Dog</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Nala</td>
                <td>Dog</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Whiskers</td>
                <td>Cat</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>Shadow</td>
                <td>Cat</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>Biscuit</td>
                <td>Cat</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>Kiwi</td>
                <td>Parrot</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>Mango</td>
                <td>Parrot</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>Tango</td>
                <td>Parrot</td>
                <td>$ 50.00</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>Poppy</td>
                <td>Dog</td>
                <td>$ 50.00</td>
              </tr>
            </tbody>
          </table>
          <button className="logout" onClick={handleSubmit}>Log out</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
