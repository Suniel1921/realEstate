import React, { useState } from "react"; // Import useState
import SideMenu from "../adminDashboard/sideMenu/SideMenu";
import '../createCategory/createCategory.css';
import toast from "react-hot-toast";
import axios from "axios";
import ManageCategory from "./ManageCategory";

const CreateCategory = () => {
    const [categoryName, setCategoryName] = useState(""); 

    const handleCreateCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/createCategory`, 
                { categoryName } 
            );
            if(response.data.success){
                toast.success(response.data.message);
                setCategoryName(""); 
            }
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);
            }
        }
    }

    return (
        <>
            <div className="createCategory_container">
                <div className="sideMenuContainer">
                    <div className="sidemenu"><SideMenu/></div>

                    <div className="createCategory">
                        <h2>Create Category From Here 🚀</h2>

                        <form className="categoryForm">
                            <input type="text" name="category" id="category" 
                                placeholder="Create Category" 
                                value={categoryName} 
                                onChange={(e) => setCategoryName(e.target.value)} 
                            />
                            <button onClick={handleCreateCategory} type="button" className="categoryBtn">Create Category</button>
                        </form>
                        <hr className="hrLine"/>

                        <div className="manageCategoryList">
                            <h3>Manage Your Category From Here</h3>
                            <ManageCategory/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCategory;



