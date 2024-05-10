import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import '../search/search.css';
import { useCategoryPurpose } from "../../context/CategoryPurposeContext";

const CategoryPurpose = () => {
    const { setSelectedCategoryPurpose } = useCategoryPurpose(); // Use useCategoryPurpose hook
    const [categoryPurpose , setCategoryPurpose] = useState([]);

    const getAllCategoryPurpose = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/categoryPurpose/allCategoryPurpose`);
            if (response.data.success) {
                setCategoryPurpose(response.data.allCategoryPurpose);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something went wrong');
            }
        }
    }

    useEffect(() => {
        getAllCategoryPurpose();
    }, []);


    const handleCategoryPurposeChange = (e) => {
        const selectedCategoryPurposeId = e.target.value; // Get the ID from the value
        const selectedCategoryPurposeName = e.target.options[e.target.selectedIndex].text; // Get the name from the selected option
        setSelectedCategoryPurpose(selectedCategoryPurposeName);
        console.log(selectedCategoryPurposeName); // Logging the name of the selected purpose
    }

    return (
        <div className="categoryPurpose_container">
            <select className="dropDown" onChange={handleCategoryPurposeChange}>
                <option value="">Purpose</option>
                {categoryPurpose.map((purpose) => (
                    <option key={purpose._id} value={purpose._id}>{purpose.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryPurpose;





