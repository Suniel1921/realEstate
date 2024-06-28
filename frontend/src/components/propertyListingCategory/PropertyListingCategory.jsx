import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PropertyListingCategory = () => {
  const [propertyListingCategories, setPropertyListingCategories] = useState([]);

  useEffect(() => {
    // Fetch all property listing categories
    axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/propertyListingCategory/all-property-listing`)
      .then(response => {
        if (response.data.success) {
          setPropertyListingCategories(response.data.allPropertyListing);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching property listing categories:', error);
        toast.error("Error fetching property listing categories");
      });
  }, []);

  return (
    <div className='register_property_container'>
         <div>
              <select className='selectCategory' name="propertyListingCategoryId">
                <option className='selectText' value="">Select a property listing category</option>
                {propertyListingCategories.map(propertyCategory => (
                  <option key={propertyCategory._id} value={propertyCategory._id}>
                    {propertyCategory.propertyListingName}
                  </option>
                ))}
              </select>
            </div>
    </div>
  );
}

export default PropertyListingCategory;





