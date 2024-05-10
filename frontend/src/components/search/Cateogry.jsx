// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import '../search/search.css';

// const Cateogry = () => {
//     const [category, setCategory] = useState([]);


//     const getAllCategory = async ()=>{
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/allCategory`);
//             if(response.data.success){
//                 setCategory(response.data.allCategory);
//             }
//             else{
//                 toast.error('something went wrong')
//             }

            
//         } catch (error) {
//             if(error.reponse){
//                 toast.error(error.reponse.data.message);
//             }
            
//         }

//     }

//     useEffect(()=>{
//         getAllCategory();
//     },[])


//   return (
//     <>
//       <div className="category_container">
//         <select className="dropDown">
//           <option value="">Choose Type</option>
//           {category.map((cat)=>(
//               <option key={cat._id} value={cat.categoryName}>{cat.categoryName}</option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// };

// export default Cateogry;








import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import '../search/search.css';
import { CategoryContext } from "../../context/CategoryContext"; // Import CategoryContext

const Category = () => {
    const { setSelectedCategory } = useContext(CategoryContext); // Destructure setSelectedCategory from CategoryContext
    const [category, setCategory] = useState([]);
    
    const getAllCategory = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/allCategory`);
            if (response.data.success) {
                setCategory(response.data.allCategory);
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
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value; // Get the selected value
        setSelectedCategory(selectedCategory); // Update the selected category in context
    };

    return (
        <div className="category_container">
            <select className="dropDown" onChange={handleCategoryChange}>
                <option value="">Choose Type</option>
                {category.map((cat) => (
                    <option key={cat._id} value={cat.categoryName}>{cat.categoryName}</option>
                ))}
            </select>
        </div>
    );
};

export default Category;
