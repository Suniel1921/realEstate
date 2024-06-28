import React, { useEffect, useState } from 'react';
import '../registerProperty/registerProperty.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const RegisterProperty = () => {
  const [propertyListingCategories, setPropertyListingCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    propertyType: '',
    condition: '',
    roadProperty: '',
    address: '',
    district: '',
    price: '',
    facilities: [],
    furnishing: '',
    facedTowards: '',
    floors: '',
    living: '',
    bathrooms: '',
    kitchen: '',
    beds: '',
    images: [],
    email: '',
    phone: '',
    propertyListingCategoryId: '' // Ensure this field is included
  });

  useEffect(() => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData({ ...formData, facilities: [...formData.facilities, value] });
      } else {
        setFormData({ ...formData, facilities: formData.facilities.filter(facility => facility !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'images') {
        formData[key].forEach(file => formDataObj.append('images', file));
      } else {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userRegisterProperty`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Property registered successfully');
      console.log('Property registered successfully', response.data);
      setFormData({
        title: '',
        description: '',
        propertyType: '',
        condition: '',
        roadProperty: '',
        address: '',
        district: '',
        price: '',
        facilities: [],
        furnishing: '',
        facedTowards: '',
        floors: '',
        living: '',
        bathrooms: '',
        kitchen: '',
        beds: '',
        images: [],
        email: '',
        phone: '',
        propertyListingCategoryId: '' // Reset this field as well
      });
    } catch (error) {
      toast.error('Error registering property');
      console.error('Error registering property', error);
    }
  };

  return (
    <div className='register_property_container'>
      <Toaster />
      <div className="container">
        <h3>Upload Your Property From Here</h3>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='Enter Title' value={formData.title} onChange={handleChange} />
            <textarea name="description" placeholder='Enter Description' value={formData.description} onChange={handleChange} />
            <div className='propertyListing'>
              <div>
                <select className='selectCategory' name="propertyListingCategoryId" value={formData.propertyListingCategoryId} onChange={handleChange} required>
                  <option className='selectText' value="">Select a property listing category</option>
                  {propertyListingCategories.map(propertyCategory => (
                    <option key={propertyCategory._id} value={propertyCategory._id}>
                      {propertyCategory.propertyListingName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='propertyType'>
              <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                <option className='selectText' value="">Select a property Type</option>
                <option value="house_for_sale">House For Sale</option>
                <option value="land_for_sale">Land For Sale</option>
                <option value="for_rent">For Rent</option>
              </select>
            </div>
            <div className='condition'>
              <select name="condition" value={formData.condition} onChange={handleChange}>
                <option className='condition' value="">Condition</option>
                <option value="brand_new">Brand New</option>
                <option value="used">Used</option>
              </select>
            </div>
            <div className='roadProperty'>
              <input type="text" name="roadProperty" placeholder='Enter Road to property' value={formData.roadProperty} onChange={handleChange} />
            </div>
            <div className='location'>
              <div className='address'>
                <input type="text" name="address" placeholder="Enter Your Property Address" value={formData.address} onChange={handleChange} />
              </div>
              <div className='districtContainer'>
                <select name="district" value={formData.district} onChange={handleChange}>
                  <option className='district' value="">-District-</option>
                  <option value="bhaktapur">Bhaktapur</option>
                  <option value="kathmandu">Kathmandu</option>
                  <option value="lalitpur">Lalitpur</option>
                </select>
              </div>
            </div>

            <div className='price'>
              <input type="number" name="price" placeholder='Enter Price' value={formData.price} onChange={handleChange} />
            </div>

            <div className='Facilities'>
              {[
                'earthquake_resistant',
                'electricity',
                'water_supply',
                'parking',
                'drainage',
                'gym',
                'elevator',
                'cctv',
                'modular_kitchen',
                'wifi',
                'garden',
                'school_college',
                'shopping_mall',
                'hospital',
                'pet_area',
                'children_play_area',
                'clubhouse',
                'jogging_track',
                'swimming_pool',
                'community_center',
                'rental_income',
                'garbage_disposal'
              ].map(facility => (
                <label key={facility}>
                  <input type="checkbox" name="facilities" value={facility} checked={formData.facilities.includes(facility)} onChange={handleChange} />
                  {facility.replace('_', ' ')}
                </label>
              ))}
            </div>

            <div className='Furnishing'>
              <select name="furnishing" value={formData.furnishing} onChange={handleChange}>
                <option className='furnishing' value="">-Furnishing-</option>
                <option value="not_furnishing">Not Furnishing</option>
                <option value="semi_furnishing">Semi Furnishing</option>
                <option value="full_furnishing">Full Furnishing</option>
              </select>
            </div>

            <div className='facedTowards'>
              <select name="facedTowards" value={formData.facedTowards} onChange={handleChange}>
                <option className='faced_towards' value="">-Faced Towards-</option>
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
                <option value="south">South</option>
              </select>
            </div>

            <div className='floorRooms'>
              <input type="number" name="floors" placeholder='Enter how many Floors' value={formData.floors} onChange={handleChange} />
              <input type="number" name="living" placeholder='Enter how many Living' value={formData.living} onChange={handleChange} />
              <input type="number" name="bathrooms" placeholder='Enter how many Bathrooms' value={formData.bathrooms} onChange={handleChange} />
              <input type="number" name="kitchen" placeholder='Enter how many Kitchen' value={formData.kitchen} onChange={handleChange} />
              <input type="number" name="beds" placeholder='Enter how many Beds' value={formData.beds} onChange={handleChange} />
            </div>

            <div className='propertyImage'>
              <input type="file" name="images" multiple onChange={handleFileChange} />
            </div>

            <div className='personlDetails'>
              <input type="text" name="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} />
              <input type="number" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterProperty;
