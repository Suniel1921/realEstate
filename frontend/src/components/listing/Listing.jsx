// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../listing/listing.css";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GiTakeMyMoney } from "react-icons/gi";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useSearchGlobally } from "../../context/SearchContext";
// import { useCategory } from "../../context/CategoryContext";
// import { useCategoryPurpose } from "../../context/CategoryPurposeContext";
// import Loading from "../loading/Loading";

// const Listing = () => {
//     const { searchQuery } = useSearchGlobally();
//     const { selectedCategory } = useCategory();
//     const { selectedCategoryPurpose } = useCategoryPurpose();
//     const [userProperty, setUserProperty] = useState([]);
//     const [propertyListingCategories, setPropertyListingCategories] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/propertyListingCategory/all-property-listing`);
//                 if (response.data.success) {
//                     setPropertyListingCategories(response.data.allPropertyListing);
//                 } else {
//                     toast.error("Failed to fetch property listing categories");
//                 }
//             } catch (error) {
//                 toast.error("Failed to fetch property listing categories");
//             }
//         };

//         const getAllUserProperty = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userProperty`);
//                 if (response.data.success) {
//                     setUserProperty(response.data.allProperties);
//                 } else {
//                     toast.error("Failed to fetch user properties");
//                 }
//             } catch (error) {
//                 toast.error("Failed to fetch user properties");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCategories();
//         getAllUserProperty();
//     }, []);

//     const filterProperties = (data) => {
//         const categoryMatch = !selectedCategory || data.category?.categoryName === selectedCategory;
//         const purposeMatch = !selectedCategoryPurpose || data.categoryPurpose?.name === selectedCategoryPurpose;
//         return categoryMatch && purposeMatch && (
//             searchQuery ? data.address.toLowerCase().includes(searchQuery.toLowerCase()) : true
//         );
//     };

//     const filteredUserProperty = userProperty.filter(filterProperties);

//     if (loading) {
//         return <Loading />;
//     }

//     return (
//         <div className="listing">
//             {propertyListingCategories.map((propertyCategory) => {
//                 const userPropertiesForCategory = filteredUserProperty.filter(data => data.propertyListingCategory === propertyCategory._id);

//                 return (
//                     <div key={propertyCategory._id}>
//                         <h3>{propertyCategory.propertyListingName}</h3>
//                         <div className="listing_container">
//                             {userPropertiesForCategory.map((data) => (
//                                 // Check if property is verified before rendering
//                                 data.isVerified ? (
//                                     <div className="listing_card" key={data._id}>
//                                         <Link to={`/single/${data._id}`} className="listing_link">
//                                             {data.images.length > 0 && (
//                                                 <img className="house_img" src={data.images[0]} alt="House" onDragStart={(e) => e.preventDefault()} />
//                                             )}
//                                             <div className="listing_card_content">
//                                                 <h2>{data.heading?.slice(0, 35) || data.title.slice(0, 35)}...</h2>
//                                                 <div className="rupeess location">
//                                                     <p className="icon">
//                                                         <GiTakeMyMoney />
//                                                     </p>
//                                                     <h4>Rs {data.price}</h4>
//                                                 </div>
//                                                 <div className="location">
//                                                     <p className="icon">
//                                                         <FaLocationDot />
//                                                     </p>
//                                                     <h4>{data.address}</h4>
//                                                 </div>
//                                                 <div className="phone location">
//                                                     <p className="icon">
//                                                         <FaPhoneAlt />
//                                                     </p>
//                                                     <h4>{data.phone}</h4>
//                                                 </div>
//                                                 <div className="category location">
//                                                     {data.category && data.categoryPurpose && (
//                                                         <div>
//                                                             {/* <h4>Category: {data.category.categoryName}</h4>
//                                                             <h4>Category Purpose: {data.categoryPurpose.name}</h4> */}
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 ) : null
//                             ))}
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Listing;






import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../listing/listing.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import toast from "react-hot-toast";
import axios from "axios";
import { useSearchGlobally } from "../../context/SearchContext";
import { useCategoryPurpose } from "../../context/CategoryPurposeContext";
import Loading from "../loading/Loading";

const Listing = () => {
  const { searchQuery } = useSearchGlobally();
  const { selectedCategoryPurpose } = useCategoryPurpose();
  const [userProperty, setUserProperty] = useState([]);
  const [propertyListingCategories, setPropertyListingCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category') || '';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/propertyListingCategory/all-property-listing`);
        if (response.data.success) {
          setPropertyListingCategories(response.data.allPropertyListing);
        } else {
          toast.error("Failed to fetch property listing categories");
        }
      } catch (error) {
        toast.error("Failed to fetch property listing categories");
      }
    };

    const getAllUserProperty = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userProperty`);
        if (response.data.success) {
          setUserProperty(response.data.allProperties);
        } else {
          toast.error("Failed to fetch user properties");
        }
      } catch (error) {
        toast.error("Failed to fetch user properties");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    getAllUserProperty();
  }, []);

  const filterProperties = (data) => {
    const categoryMatch = !selectedCategory || data.propertyListingCategory === selectedCategory;
    const purposeMatch = !selectedCategoryPurpose || data.categoryPurpose?.name === selectedCategoryPurpose;
    return categoryMatch && purposeMatch && (
      searchQuery ? data.address.toLowerCase().includes(searchQuery.toLowerCase()) : true
    );
  };

  const filteredUserProperty = userProperty.filter(filterProperties);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="listing">
      {propertyListingCategories.map((propertyCategory) => {
        const userPropertiesForCategory = filteredUserProperty.filter(data => data.propertyListingCategory === propertyCategory._id);

        return (
          <div key={propertyCategory._id}>
            <h3>{propertyCategory.propertyListingName}</h3>
            <div className="listing_container">
              {userPropertiesForCategory.map((data) => (
                // Check if property is verified before rendering
                data.isVerified ? (
                  <div className="listing_card" key={data._id}>
                    <Link to={`/single/${data._id}`} className="listing_link">
                      {data.images.length > 0 && (
                        <img className="house_img" src={data.images[0]} alt="House" onDragStart={(e) => e.preventDefault()} />
                      )}
                      <div className="listing_card_content">
                        <h2>{data.heading?.slice(0, 35) || data.title.slice(0, 35)}...</h2>
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
                          {data.category && data.categoryPurpose && (
                            <div>
                              {/* <h4>Category: {data.category.categoryName}</h4>
                              <h4>Category Purpose: {data.categoryPurpose.name}</h4> */}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
