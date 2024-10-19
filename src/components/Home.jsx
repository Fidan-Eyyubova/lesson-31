import React from 'react'
import { GiCat } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home pb-5'>
     <div className="p-5 rounded-3 d-flex">
  <div className="container-fluid py-5 d-flex">
    <div>
    <h1 className="display-5 fw-bold">Adopt, Love, Save</h1>
    <p className="first mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laudantium error exercitationem odio et, quas cum mollitia ad iusto itaque! Iure, aperiam. Quo nulla perferendis repellendus laudantium aliquam quis rem?</p>
    </div>
        <img src="https://www.1800whiskers.com/wp-content/uploads/2022/05/web-hero-pets-primary.png" alt="" />
  </div>
</div>


<div className="container px-4 py-5 mt-5 mb-5 home-two text-center" id="featured-3">
  <h2 className="pb-2">Why choose our friends?</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="icon d-inline-flex align-items-center justify-content-center  mb-3">
      <GiCat />
      </div>
      <h3 className="text-body-emphasis">More Of Them</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab animi nesciunt pariatur assumenda fuga commodi?</p>
      
    </div>
    <div className="feature col">
      <div className="icon d-inline-flex align-items-center justify-content-center  mb-3">
      <MdOutlineHealthAndSafety />
      </div>
      <h3 className="fs-2 text-body-emphasis">Healthier Pets</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat dolores repellat suscipit! Magnam, iure.</p>
      
    </div>
    <div className="feature col">
      <div className="icon d-inline-flex align-items-center justify-content-center  mb-3">
      <FaHeart />
      </div>
      <h3 className="fs-2 text-body-emphasis">They Are Loved</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aperiam. Iure accusamus doloribus molestias quidem.</p>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default Home
