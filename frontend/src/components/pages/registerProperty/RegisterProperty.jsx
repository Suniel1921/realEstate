import React, { useEffect, useState } from 'react';
import '../registerProperty/registerProperty.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterProperty = () => {
  const [propertyListingCategories, setPropertyListingCategories] = useState([]);
  const [loading, setLoading] = useState(false); 

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

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    propertyListingCategoryId: Yup.string().required('Property listing category is required'),
    propertyType: Yup.string().required('Property type is required'),
    condition: Yup.string().required('Condition is required'),
    roadProperty: Yup.string().required('Road to property is required'),
    address: Yup.string().required('Address is required'),
    district: Yup.string().required('District is required'),
    price: Yup.string().required('Price is required'),
    facilities: Yup.array(),
    furnishing: Yup.string().required('Furnishing is required'),
    facedTowards: Yup.string().required('Facing direction is required'),
    floors: Yup.number().positive('Floors must be positive'),
living: Yup.number().positive('Number of living rooms must be positive'),
bathrooms: Yup.number().positive('Number of bathrooms must be positive'),
kitchen: Yup.number().positive('Number of kitchens must be positive'),
beds: Yup.number().positive('Number of beds must be positive'),

    images: Yup.array().min(1, 'At least one image is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required').max(10, 'Phone Number Must be 10 digits').min(10, 'Phone number must be 10 digits'),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      propertyListingCategoryId: '',
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
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); 
      toast.loading('Uploading images... Please wait.');

      const formDataObj = new FormData();
      Object.keys(values).forEach(key => {
        if (key === 'images') {
          values[key].forEach(file => formDataObj.append('images', file));
        } else {
          formDataObj.append(key, values[key]);
        }
      });

      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userRegisterProperty`, formDataObj, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.dismiss();
        toast.success('Property registered successfully');
        console.log('Property registered successfully', response.data);
        resetForm(); // Reset form fields after successful submission
      } catch (error) {
        toast.dismiss();
        toast.error('Error registering property');
        console.error('Error registering property', error);
      } finally {
        setLoading(false); // Set loading state to false
      }
    },
  });

  return (
    <div className='register_property_container'>
      <Toaster />
      <div className="container propertyContainer">
        <h3>Upload Your Property From Here</h3>
        <div className="formContainer">
         
            <form className='userRegisterProperty' onSubmit={formik.handleSubmit}>
              <input type="text" name="title" placeholder='Enter Title' value={formik.values.title} onChange={formik.handleChange} />
              {formik.touched.title && formik.errors.title ? <div className="error">{formik.errors.title}</div> : null}

              <textarea name="description" placeholder='Enter Description' value={formik.values.description} onChange={formik.handleChange} />
              {formik.touched.description && formik.errors.description ? <div className="error">{formik.errors.description}</div> : null}

              <div className='propertyListing'>
                <div>
                  <select className='selectCategory' name="propertyListingCategoryId" value={formik.values.propertyListingCategoryId} onChange={formik.handleChange}>
                    <option className='selectText' value="">Select a property listing category</option>
                    {propertyListingCategories.map(propertyCategory => (
                      <option key={propertyCategory._id} value={propertyCategory._id}>
                        {propertyCategory.propertyListingName}
                      </option>
                    ))}
                  </select>
                  {formik.touched.propertyListingCategoryId && formik.errors.propertyListingCategoryId ? <div className="error">{formik.errors.propertyListingCategoryId}</div> : null}
                </div>
              </div>

              <div className='propertyType'>
                <select name="propertyType" value={formik.values.propertyType} onChange={formik.handleChange}>
                  <option className='selectText' value="">Select a property Type</option>
                  <option value="house_for_sale">House For Sale</option>
                  <option value="land_for_sale">Land For Sale</option>
                  <option value="for_rent">For Rent</option>
                </select>
                {formik.touched.propertyType && formik.errors.propertyType ? <div className="error">{formik.errors.propertyType}</div> : null}
              </div>

              <div className='condition'>
                <select name="condition" value={formik.values.condition} onChange={formik.handleChange}>
                  <option className='condition' value="">Condition</option>
                  <option value="brand_new">Brand New</option>
                  <option value="used">Used</option>
                </select>
                {formik.touched.condition && formik.errors.condition ? <div className="error">{formik.errors.condition}</div> : null}
              </div>

              <div className='roadProperty'>
                <input type="text" name="roadProperty" placeholder='Enter Road to property' value={formik.values.roadProperty} onChange={formik.handleChange} />
                {formik.touched.roadProperty && formik.errors.roadProperty ? <div className="error">{formik.errors.roadProperty}</div> : null}
              </div>

              <div className='location'>
                <div className='address'>
                  <input type="text" name="address" placeholder="Enter Your Property Address" value={formik.values.address} onChange={formik.handleChange} />
                  {formik.touched.address && formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
                </div>
                <div className='districtContainer'>
                  <select name="district" value={formik.values.district} onChange={formik.handleChange}>
                    <option className='district' value="">-District-</option>
                    <option value="bhaktapur">Bhaktapur</option>
                    <option value="kathmandu">Kathmandu</option>
                    <option value="lalitpur">Lalitpur</option>
                  </select>
                  {formik.touched.district && formik.errors.district ? <div className="error">{formik.errors.district}</div> : null}
                </div>
              </div>

              <div className='price'>
                <input type="text" name="price" placeholder='Enter Price' value={formik.values.price} onChange={formik.handleChange} />
                {formik.touched.price && formik.errors.price ? <div className="error">{formik.errors.price}</div> : null}
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
                    <input type="checkbox" name="facilities" value={facility} checked={formik.values.facilities.includes(facility)} onChange={formik.handleChange} />
                    {facility.replace('_', ' ')}
                  </label>
                ))}
              </div>

              <div className='Furnishing'>
                <select name="furnishing" value={formik.values.furnishing} onChange={formik.handleChange}>
                  <option className='furnishing' value="">-Furnishing-</option>
                  <option value="not_furnishing">Not Furnishing</option>
                  <option value="semi_furnishing">Semi Furnishing</option>
                  <option value="full_furnishing">Full Furnishing</option>
                </select>
                {formik.touched.furnishing && formik.errors.furnishing ? <div className="error">{formik.errors.furnishing}</div> : null}
              </div>

              <div className='facedTowards'>
                <select name="facedTowards" value={formik.values.facedTowards} onChange={formik.handleChange}>
                  <option className='faced_towards' value="">-Faced Towards-</option>
                  <option value="north">North</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                  <option value="south">South</option>
                </select>
                {formik.touched.facedTowards && formik.errors.facedTowards ? <div className="error">{formik.errors.facedTowards}</div> : null}
              </div>

              <div className='floorRooms'>
                <input type="number" name="floors" placeholder='Enter how many Floors' value={formik.values.floors} onChange={formik.handleChange} />
                {formik.touched.floors && formik.errors.floors ? <div className="error">{formik.errors.floors}</div> : null}
                <input type="number" name="living" placeholder='Enter how many Living' value={formik.values.living} onChange={formik.handleChange} />
                {formik.touched.living && formik.errors.living ? <div className="error">{formik.errors.living}</div> : null}
                <input type="number" name="bathrooms" placeholder='Enter how many Bathrooms' value={formik.values.bathrooms} onChange={formik.handleChange} />
                {formik.touched.bathrooms && formik.errors.bathrooms ? <div className="error">{formik.errors.bathrooms}</div> : null}
                <input type="number" name="kitchen" placeholder='Enter how many Kitchen' value={formik.values.kitchen} onChange={formik.handleChange} />
                {formik.touched.kitchen && formik.errors.kitchen ? <div className="error">{formik.errors.kitchen}</div> : null}
                <input type="number" name="beds" placeholder='Enter how many Beds' value={formik.values.beds} onChange={formik.handleChange} />
                {formik.touched.beds && formik.errors.beds ? <div className="error">{formik.errors.beds}</div> : null}
              </div>

              <div className='propertyImage'>
                <input type="file" name="images" multiple onChange={(event) => formik.setFieldValue("images", [...event.currentTarget.files])} />
                {formik.touched.images && formik.errors.images ? <div className="error">{formik.errors.images}</div> : null}
              </div>

              <div className='personlDetails'>
                <input type="email" name="email" placeholder="Enter Your Email Address" value={formik.values.email} onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                <input type="number" name="phone" placeholder="Enter Your Phone Number" value={formik.values.phone} onChange={formik.handleChange} />
                {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
              </div>

              <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterProperty;
