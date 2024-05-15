// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Link } from "react-router-dom"; // Import Link from react-router-dom
// // // // // import "../listing/listing.css";
// // // // // import { FaLocationDot } from "react-icons/fa6";
// // // // // import { FaPhoneAlt } from "react-icons/fa";
// // // // // import { GiTakeMyMoney } from "react-icons/gi";
// // // // // import toast from "react-hot-toast";
// // // // // import axios from "axios";
// // // // // import { useSearchGlobally } from "../../context/SearchContext";

// // // // // const Listing = () => {
// // // // //   const [listingData, setListingData] = useState([]);
// // // // //   const [searchQuery, setSearchQuery] = useSearchGlobally();

// // // // //   const getAllData = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(
// // // // //         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`
// // // // //       );
// // // // //       if (response.data.success) {
// // // // //         setListingData(response.data.allData);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       if (error.response) {
// // // // //         toast.error(error.response.data.message);
// // // // //       } else {
// // // // //         toast.error("Something went wrong");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     getAllData();
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <div className="listing">
// // // // //         <h2>Special Listing</h2>
// // // // //         <div className="listing_container">
// // // // //           {listingData.map((data) => (
// // // // //             <div className="listing_card" key={data._id}>
// // // // //               <Link to={`/single/${data._id}`} className="listing_link">
// // // // //                 {/* Redirects to single page */}
// // // // //                 {/* Displaying only the first image */}
// // // // //                 {data.images.length > 0 && (
// // // // //                   <img className="house_img" src={data.images[0]} alt="House" />
// // // // //                 )}
// // // // //                 <div className="listing_card_content">
// // // // //                   <h2>{data.heading.slice(0, 35)}...</h2>
// // // // //                   <div className="rupeess location">
// // // // //                     <p className="icon">
// // // // //                       <GiTakeMyMoney />
// // // // //                     </p>
// // // // //                     <h4>Rs {data.price}</h4>
// // // // //                   </div>
// // // // //                   <div className="location">
// // // // //                     <p className="icon">
// // // // //                       <FaLocationDot />
// // // // //                     </p>
// // // // //                     <h4>{data.address}</h4>
// // // // //                   </div>
// // // // //                   <div className="phone location">
// // // // //                     <p className="icon">
// // // // //                       <FaPhoneAlt />
// // // // //                     </p>
// // // // //                     <h4>{data.phone}</h4>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Link>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Listing;








// // // //Listing.jsx
// // // import React, { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import "../listing/listing.css";
// // // import { FaLocationDot } from "react-icons/fa6";
// // // import { FaPhoneAlt } from "react-icons/fa";
// // // import { GiTakeMyMoney } from "react-icons/gi";
// // // import toast from "react-hot-toast";
// // // import axios from "axios";
// // // import { useSearchGlobally } from "../../context/SearchContext"; // Correct import

// // // const Listing = () => {
// // //   const { searchQuery } = useSearchGlobally(); // Destructure the result from useSearchGlobally
// // //   const [listingData, setListingData] = useState([]);
// // //   console.log(listingData);

// // //   const getAllData = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`
// // //       );
// // //       if (response.data.success) {
// // //         setListingData(response.data.allData);
// // //       }
// // //     } catch (error) {
// // //       if (error.response) {
// // //         toast.error(error.response.data.message);
// // //       } else {
// // //         toast.error("Something went wrong");
// // //       }
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getAllData();
// // //   }, []);

// // //   // Filter listingData based on searchQuery
// // //   const filteredData = listingData.filter((data) =>
// // //     data.address.toLowerCase().includes(searchQuery.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="listing">
// // //       <h2>Special Listing</h2>
// // //       <div className="listing_container">
// // //         {filteredData.map((data) => (
// // //           <div className="listing_card" key={data._id}>
// // //             <Link to={`/single/${data._id}`} className="listing_link">
// // //               {data.images.length > 0 && (
// // //                 <img className="house_img" src={data.images[0]} alt="House" />
// // //               )}
// // //               <div className="listing_card_content">
// // //                 <h2>{data.heading.slice(0, 35)}...</h2>
// // //                 <div className="rupeess location">
// // //                   <p className="icon">
// // //                     <GiTakeMyMoney />
// // //                   </p>
// // //                   <h4>Rs {data.price}</h4>
// // //                 </div>
// // //                 <div className="location">
// // //                   <p className="icon">
// // //                     <FaLocationDot />
// // //                   </p>
// // //                   <h4>{data.address}</h4>
// // //                 </div>
// // //                 <div className="phone location">
// // //                   <p className="icon">
// // //                     <FaPhoneAlt />
// // //                   </p>
// // //                   <h4>{data.phone}</h4>
// // //                 </div>
// // //                 <div className="category location">
// // //                   {/* <h4>Category: {data.category.categoryName}</h4>
// // //                   <h4>Category Purpose: {data.categoryPurpose}</h4> */}
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Listing;


















// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "../listing/listing.css";
// // import { FaLocationDot } from "react-icons/fa6";
// // import { FaPhoneAlt } from "react-icons/fa";
// // import { GiTakeMyMoney } from "react-icons/gi";
// // import toast from "react-hot-toast";
// // import axios from "axios";
// // import { useSearchGlobally } from "../../context/SearchContext";

// // const Listing = () => {
// //     const { searchQuery } = useSearchGlobally();
// //     const [listingData, setListingData] = useState([]);
// //     console.log(listingData)

// //     const getAllData = async () => {
// //         try {
// //             const response = await axios.get(
// //                 `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`
// //             );
// //             if (response.data.success) {
// //                 // Populate the 'category' field with 'categoryPurpose'
// //                 const dataWithCategoryPurpose = response.data.allData.map(item => ({
// //                     ...item,
// //                     category: {
// //                         ...(item.category || {}), // Ensure category exists
// //                         categoryName: (item.category || {}).categoryName,
// //                         categoryPurpose: (item.category || {}).categoryPurpose
// //                     }
// //                 }));
// //                 setListingData(dataWithCategoryPurpose);
// //             }
// //         } catch (error) {
// //             if (error.response) {
// //                 toast.error(error.response.data.message);
// //             } else {
// //                 toast.error("Something went wrong");
// //             }
// //         }
// //     };

// //     useEffect(() => {
// //         getAllData();
// //     }, []);

// //     // Filter listingData based on searchQuery
// //     const filteredData = listingData.filter(data =>
// //         data.address.toLowerCase().includes(searchQuery.toLowerCase())
// //     );

// //     return (
// //         <div className="listing">
// //             <h2>Special Listing</h2>
// //             <div className="listing_container">
// //                 {filteredData.map((data) => (
// //                     <div className="listing_card" key={data._id}>
// //                         <Link to={`/single/${data._id}`} className="listing_link">
// //                             {data.images.length > 0 && (
// //                                 <img className="house_img" src={data.images[0]} alt="House" />
// //                             )}
// //                             <div className="listing_card_content">
// //                                 <h2>{data.heading.slice(0, 35)}...</h2>
// //                                 <div className="rupeess location">
// //                                     <p className="icon">
// //                                         <GiTakeMyMoney />
// //                                     </p>
// //                                     <h4>Rs {data.price}</h4>
// //                                 </div>
// //                                 <div className="location">
// //                                     <p className="icon">
// //                                         <FaLocationDot />
// //                                     </p>
// //                                     <h4>{data.address}</h4>
// //                                 </div>
// //                                 <div className="phone location">
// //                                     <p className="icon">
// //                                         <FaPhoneAlt />
// //                                     </p>
// //                                     <h4>{data.phone}</h4>
// //                                 </div>
// //                                 <div className="category location">
// //                                     {/* Check if categoryPurpose exists */}
// //                                     {data.categoryPurpose &&  (
// //                                         <div>
// //                                         <h4>Category: {data.category.categoryName}</h4>
// //                                         <h4>categoryPurpose : {data.categoryPurpose.name} </h4>
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                         </Link>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Listing;










// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../listing/listing.css";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GiTakeMyMoney } from "react-icons/gi";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useSearchGlobally } from "../../context/SearchContext";
// import { useCategory } from "../../context/CategoryContext"; // Import useCategory hook
// import { useCategoryPurpose } from "../../context/CategoryPurposeContext";


// const Listing = () => {
//     const { searchQuery } = useSearchGlobally();
//     const { selectedCategory } = useCategory(); // Destructure selectedCategory from useCategory hook
//     const {selectedCategoryPurpose} = useCategoryPurpose();
//     const [listingData, setListingData] = useState([]);
//     console.log(selectedCategoryPurpose)

//     const getAllData = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`);
//             if (response.data.success) {
//                 setListingData(response.data.allData);
//             }
//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message);
//             } else {
//                 toast.error("Something went wrong");
//             }
//         }
//     };

//     useEffect(() => {
//         getAllData();
//     }, []);

//    // Filter listingData based on searchQuery and selectedCategory
// const filteredData = listingData.filter(data =>
//     data.address.toLowerCase().includes(searchQuery.toLowerCase()) &&
//     (!selectedCategory || (data.category && data.category.categoryName === selectedCategory))&&
//     (!selectedCategoryPurpose || (data.categoryPurpose && data.categoryPurpose.name === selectedCategoryPurpose))
// );


//     return (
//         <div className="listing">
//             <h2>Special Listing</h2>
//             <div className="listing_container">
//                 {filteredData.map((data) => (
//                     <div className="listing_card" key={data._id}>
//                         <Link to={`/single/${data._id}`} className="listing_link">
//                             {data.images.length > 0 && (
//                                 <img className="house_img" src={data.images[0]} alt="House" />
//                             )}
//                             <div className="listing_card_content">
//                                 <h2>{data.heading.slice(0, 35)}...</h2>
//                                 <div className="rupeess location">
//                                     <p className="icon">
//                                         <GiTakeMyMoney />
//                                     </p>
//                                     <h4>Rs {data.price}</h4>
//                                 </div>
//                                 <div className="location">
//                                     <p className="icon">
//                                         <FaLocationDot />
//                                     </p>
//                                     <h4>{data.address}</h4>
//                                 </div>
//                                 <div className="phone location">
//                                     <p className="icon">
//                                         <FaPhoneAlt />
//                                     </p>
//                                     <h4>{data.phone}</h4>
//                                 </div>
//                                 <div className="category location">
//                                 {data.categoryPurpose &&  (
//     <div>
//     <h4>Category: {data.category.categoryName}</h4>
//     <h4>categoryPurpose : {data.categoryPurpose.name} </h4>
//     </div>
// )}

//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Listing;











import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../listing/listing.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import toast from "react-hot-toast";
import axios from "axios";
import { useSearchGlobally } from "../../context/SearchContext";
import { useCategory } from "../../context/CategoryContext";
import { useCategoryPurpose } from "../../context/CategoryPurposeContext";

const Listing = () => {
    const { searchQuery } = useSearchGlobally();
    const { selectedCategory } = useCategory();
    const { selectedCategoryPurpose } = useCategoryPurpose();
    const [listingData, setListingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`);
                if (response.data.success) {
                    setListingData(response.data.allData);
                } else {
                    toast.error("Something went wrong");
                }
            } catch (error) {
                toast.error("Something went wrong");
            }
        };

        fetchData();
    }, []);

    // Filter listingData based on searchQuery, selectedCategory, and selectedCategoryPurpose
    const filteredData = listingData.filter(data => {
        // Check if both selectedCategory and selectedCategoryPurpose match the data
        const categoryMatch = !selectedCategory || data.category?.categoryName === selectedCategory;
        const purposeMatch = !selectedCategoryPurpose || data.categoryPurpose?.name === selectedCategoryPurpose;

        return categoryMatch && purposeMatch && (
            searchQuery ? data.address.toLowerCase().includes(searchQuery.toLowerCase()) : true
        );
    });

    return (
        <div className="listing">
            <h2>Special Listing</h2>
            <div className="listing_container">
                {filteredData.map((data) => (
                    <div className="listing_card" key={data._id}>
                        <Link to={`/single/${data._id}`} className="listing_link">
                            {data.images.length > 0 && (
                                <img className="house_img" src={data.images[0]} alt="House" />
                            )}
                            <div className="listing_card_content">
                                <h2>{data.heading.slice(0, 35)}...</h2>
                                <div className="rupeess location">
                                    <p className="icon">
                                        <GiTakeMyMoney />
                                    </p>
                                    <h4>Rs {data.price}</h4>
                                </div>
                                <div className="location">
                                    <p className="icon">
                                        <FaLocationDot />
                                    </p>
                                    <h4>{data.address}</h4>
                                </div>
                                <div className="phone location">
                                    <p className="icon">
                                        <FaPhoneAlt />
                                    </p>
                                    <h4>{data.phone}</h4>
                                </div>
                                <div className="category location">
                                    {/* Render category and categoryPurpose */}
                                    {data.category && data.categoryPurpose && (
                                        <div>
                                            <h4>Category: {data.category.categoryName}</h4>
                                            <h4>Category Purpose: {data.categoryPurpose.name}</h4>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listing;




