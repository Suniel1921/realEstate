// import React, { useEffect, useState } from 'react';
// import '../registerProperty/registerProperty.css';
// import axios from 'axios';
// import PropertyListingCategory from '../../propertyListingCategory/PropertyListingCategory';


// const RegisterProperty = () => {
//   const [propertyListingCategories, setPropertyListingCategories] = useState([]);

  

//   return (
//     <div className='register_property_container'>
//       <div className="container">
//         <h3>Upload Your Property From Here</h3>
//         <div className="formContainer">
//           <form>
//             <input type="text" name="title" placeholder='Enter Title' />
//             <textarea name="description" placeholder='Enter Description' />
//             <div className='propertyListing'>
//              <PropertyListingCategory/>
//             </div>
//             <div className='propertyType'>
//               <select name="propertyType">
//               <option className='selectText' value="">Select a property Type</option>
//                 <option value="house_for_sale">House For Sale</option>
//                 <option value="land_for_sale">Land For Sale</option>
//                 <option value="for_rent">For Rent</option>
//               </select>
//             </div>
//             <div className='condition'>
//               <select name="condition">
//               <option className='condition' value="">Condition</option>
//                 <option value="house_for_sale">Brand New</option>
//                 <option value="land_for_sale">Used</option>
//               </select>
//             </div>
//             <div className='roadProperty'>
//               <input type="text" name="roadProperty" placeholder='Enter Road to property' />
//             </div>
//             <div className='location'>
//               <div className='address'>
//                 <input type="text" name="address" placeholder="Enter Your Property Address"  />
//               </div>
//               <div className='districtContainer'>
//               <select name="district">
//               <option className='district' value="">-District-</option>
//                 <option value="bhaktapur">Bhaktapur</option>
//                 <option value="Kathmandu">Kathmandu</option>
//                 <option value="lalitpur">Lalitpur</option>
//               </select>
//               </div>
//             </div>

//             <div className='price'>
//               <input type="number" name="price" placeholder='Enter Price' />
//             </div>

//             <div className='Facilities'>
//   <label>
//     <input type="checkbox" name="facilities" value="earthquake_resistant" />
//     Earthquake Resistant
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="electricity" />
//     Electricity
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="water_supply" />
//     Water Supply
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="telephone" />
//     Telephone
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="internet" />
//     Internet
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="drainage" />
//     Drainage
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="solar" />
//     Solar
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="water" />
//     Water
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="cable_tv" />
//     Cable TV
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="parking" />
//     Parking
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="well" />
//     Well
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="reserve_tank" />
//     Reserve Tank
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="garden" />
//     Garden
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="rental_income" />
//     Rental Income
//   </label>
//   <label>
//     <input type="checkbox" name="facilities" value="garbage_disposal" />
//     Garbage Disposal
//   </label>
// </div>

// <div className='Furnishing'>
// <select name="Furnishing">
//               <option className='rurnishing' value="">-Furnishing-</option>
//                 <option value="not_urnishing">Not Furnishing</option>
//                 <option value="semi_furnishing">Semi Furnishing</option>
//                 <option value="full_furnishing">Full Furnishing</option>
//               </select>

// </div>
// <div className='facedTowards'>
// <select name="Faced_Towards">
//               <option className='faced_towards' value="">-Faced Towards-</option>
//                 <option value="north">North</option>
//                 <option value="east">East</option>
//                 <option value="west">West</option>
//                 <option value="south">South</option>
//               </select>

// </div>


// <div className='floorRooms'>
//   <input type="number" name="floors" placeholder='Enter how many Floors'/>
//   <input type="number" name="living" placeholder='Enter how many Living' />
//   <input type="number" name="bathrooms" placeholder='Enter how many Bathrooms' />
//   <input type="number" name="kitchen" placeholder='Enter how many Kitchen' />
//   <input type="number" name="beds" placeholder='Enter how many Beds' />

// </div>

// <div className='propertyImage'>
//   <input type="file" name="image" />
// </div>

// <div className='personlDetails'></div>
// <input type="text" name="email" placeholder="Enter Your Email Adderess"  />
// <input type="number" name="phone" placeholder="Enter Your Phone Number"  />

// <button>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegisterProperty;








import React, { useState } from 'react';
import '../registerProperty/registerProperty.css';
import axios from 'axios';
import PropertyListingCategory from '../../propertyListingCategory/PropertyListingCategory';

const RegisterProperty = () => {
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
    image: '',
    email: '',
    phone: ''
  });

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
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => formDataObj.append(key, formData[key]));

    try {
      const response = await axios.post('http://localhost:5000/api/v1/userProperty/userRegisterProperty', formDataObj, {

        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Property registered successfully', response.data);
    } catch (error) {
      console.error('Error registering property', error);
    }
  };

  return (
    <div className='register_property_container'>
      <div className="container">
        <h3>Upload Your Property From Here</h3>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='Enter Title' onChange={handleChange} />
            <textarea name="description" placeholder='Enter Description' onChange={handleChange} />
            <div className='propertyListing'>
              <PropertyListingCategory />
            </div>
            <div className='propertyType'>
              <select name="propertyType" onChange={handleChange}>
                <option className='selectText' value="">Select a property Type</option>
                <option value="house_for_sale">House For Sale</option>
                <option value="land_for_sale">Land For Sale</option>
                <option value="for_rent">For Rent</option>
              </select>
            </div>
            <div className='condition'>
              <select name="condition" onChange={handleChange}>
                <option className='condition' value="">Condition</option>
                <option value="brand_new">Brand New</option>
                <option value="used">Used</option>
              </select>
            </div>
            <div className='roadProperty'>
              <input type="text" name="roadProperty" placeholder='Enter Road to property' onChange={handleChange} />
            </div>
            <div className='location'>
              <div className='address'>
                <input type="text" name="address" placeholder="Enter Your Property Address" onChange={handleChange} />
              </div>
              <div className='districtContainer'>
                <select name="district" onChange={handleChange}>
                  <option className='district' value="">-District-</option>
                  <option value="bhaktapur">Bhaktapur</option>
                  <option value="kathmandu">Kathmandu</option>
                  <option value="lalitpur">Lalitpur</option>
                </select>
              </div>
            </div>

            <div className='price'>
              <input type="number" name="price" placeholder='Enter Price' onChange={handleChange} />
            </div>

            <div className='Facilities'>
              {[
                'earthquake_resistant',
                'electricity',
                'water_supply',
                'telephone',
                'internet',
                'drainage',
                'solar',
                'water',
                'cable_tv',
                'parking',
                'well',
                'reserve_tank',
                'garden',
                'rental_income',
                'garbage_disposal'
              ].map(facility => (
                <label key={facility}>
                  <input type="checkbox" name="facilities" value={facility} onChange={handleChange} />
                  {facility.replace('_', ' ')}
                </label>
              ))}
            </div>

            <div className='Furnishing'>
              <select name="furnishing" onChange={handleChange}>
                <option className='furnishing' value="">-Furnishing-</option>
                <option value="not_furnishing">Not Furnishing</option>
                <option value="semi_furnishing">Semi Furnishing</option>
                <option value="full_furnishing">Full Furnishing</option>
              </select>
            </div>

            <div className='facedTowards'>
              <select name="facedTowards" onChange={handleChange}>
                <option className='faced_towards' value="">-Faced Towards-</option>
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
                <option value="south">South</option>
              </select>
            </div>

            <div className='floorRooms'>
              <input type="number" name="floors" placeholder='Enter how many Floors' onChange={handleChange} />
              <input type="number" name="living" placeholder='Enter how many Living' onChange={handleChange} />
              <input type="number" name="bathrooms" placeholder='Enter how many Bathrooms' onChange={handleChange} />
              <input type="number" name="kitchen" placeholder='Enter how many Kitchen' onChange={handleChange} />
              <input type="number" name="beds" placeholder='Enter how many Beds' onChange={handleChange} />
            </div>

            <div className='propertyImage'>
              <input type="file" name="image" onChange={handleFileChange} />
            </div>

            <div className='personlDetails'>
              <input type="text" name="email" placeholder="Enter Your Email Address" onChange={handleChange} />
              <input type="number" name="phone" placeholder="Enter Your Phone Number" onChange={handleChange} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterProperty;
