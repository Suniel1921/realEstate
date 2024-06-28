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
import Loading from "../loading/Loading";

const Listing = () => {
    const { searchQuery } = useSearchGlobally();
    const { selectedCategory } = useCategory();
    const { selectedCategoryPurpose } = useCategoryPurpose();
    const [listingData, setListingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [propertyListingCategories, setPropertyListingCategories] = useState([]);

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
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        fetchCategories();
    }, []);

    const filteredData = listingData.filter(data => {
        const categoryMatch = !selectedCategory || data.category?.categoryName === selectedCategory;
        const purposeMatch = !selectedCategoryPurpose || data.categoryPurpose?.name === selectedCategoryPurpose;
        return categoryMatch && purposeMatch && (
            searchQuery ? data.address.toLowerCase().includes(searchQuery.toLowerCase()) : true
        );
    });

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="listing">
            {propertyListingCategories.map((property) => {
                const listingsForCategory = filteredData.filter(data => data.propertyListingCategory === property._id);
                return (
                    <div key={property._id}>
                        <h3>{property.propertyListingName}</h3>
                        <div className="listing_container">
                            {listingsForCategory.map((data) => (
                                <div className="listing_card" key={data._id}>
                                    <Link to={`/single/${data._id}`} className="listing_link">
                                        {data.images.length > 0 && (
                                            <img className="house_img" src={data.images[0]} alt="House" onDragStart={(e) => e.preventDefault()} />
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
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Listing;











