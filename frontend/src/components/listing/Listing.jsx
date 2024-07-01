import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../listing/listing.css";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
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
                data.isVerified ? (
                  <div className="listing_card" key={data._id}>
                    <Link to={`/single/${data._id}`} className="listing_link">
                      {data.images.length > 0 && (
                        <img className="house_img" src={data.images[0]} alt="House" onDragStart={(e) => e.preventDefault()} />
                      )}
                      <div className="listing_card_content">
                        <div className="price_tag">Rs. {data.price}</div>
                        <h2 className="listingHeading">{data.heading?.slice(0, 20) || data.title.slice(0, 35)}...</h2>
                        <h3><LuPhoneCall/>{data.phone}</h3>
                        <div className="location">
                          {/* <p className="icon"></p> */}
                          <h3><CiLocationOn/>{data.address}</h3>
                        </div>
                        <div className="properties_count">
                          <span>{data.propertyCount} {data.propertyType}</span>
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
