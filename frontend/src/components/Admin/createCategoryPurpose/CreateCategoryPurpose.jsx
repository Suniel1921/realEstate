import React, { useState } from "react";
import toast from "react-hot-toast";
import SideMenu from "../adminDashboard/sideMenu/SideMenu";
import "../createCategoryPurpose/categoryPurpose.css";
import axios from "axios";
import ManageCategoryPurpose from "./ManageCategoryPurpose";

const CreateCategoryPurpose = () => {
  const [categoryPurposeData, setCategoryPurposeData] = useState('');

  const handleCategoryPurpose = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/categoryPurpose/categoryPurpose`, {
        // Sending category purpose data
        name: categoryPurposeData // Assuming category purpose is an object with a 'name' property
      });
      if (response.data.success) {
        toast.success(response.data.message);
        // Clear input after successful creation
        setCategoryPurposeData('');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="createCategoryPurpose_container">
        <div className="sideMenuContainer">
          <div className="sidemenu">
            <SideMenu />
          </div>

          <div className="createCategoryPurpose">
          <h2>Create Category Purpose From Here 🚀</h2>
            
            <form className="categoryPurposeForm">
              <input
                onChange={(e) => setCategoryPurposeData(e.target.value)} // Fixed onChange handler
                value={categoryPurposeData} // Correct value assignment
                type="text"
                name="categoryPurpose"
                id="categoryPurpose"
                placeholder="Enter Category Purpose Name"
              />
              <button className="categoryPurposeBtn" onClick={handleCategoryPurpose} type="submit">
                Create Purpose
              </button>
            </form>
            <hr className="hrLine"/>
            <div className="categoryPurposeList manageCategoryList">
                <h3>Manage Category Purose From Here</h3>
                <ManageCategoryPurpose/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategoryPurpose;
