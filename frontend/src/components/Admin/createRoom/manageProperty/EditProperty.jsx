// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Form, Input, Button, Select, Checkbox, Upload, Switch } from "antd";
// import { Toaster, toast } from 'react-hot-toast';

// const { Option } = Select;

// const EditProperty = ({ property, onCancel, getAllProperty }) => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [propertyListingCategories, setPropertyListingCategories] = useState([]);
//   const [isVerified, setIsVerified] = useState(property.isVerified || false);

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/propertyListingCategory/all-property-listing`)
//       .then(response => {
//         if (response.data.success) {
//           setPropertyListingCategories(response.data.allPropertyListing);
//         } else {
//           toast.error(response.data.message);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching property listing categories:', error);
//         toast.error("Error fetching property listing categories");
//       });
//   }, []);

//   const onFinish = async (values) => {
//     try {
//       setLoading(true);
//       await axios.put(
//         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/updateProperty/${property._id}`,
//         { ...values, isVerified }
//       );
//       getAllProperty();
//       onCancel(); // Close the modal
//     } catch (error) {
//       console.error("Error while updating property:", error);
//       toast.error("Error while updating property");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='register_property_container'>
//       <Toaster />
//       <div className="container propertyContainer">
//         <h3>Edit Your Property</h3>
//         <div className="formContainer">
//           <Form
//             form={form}
//             layout="vertical"
//             onFinish={onFinish}
//             initialValues={{
//               ...property,
//               isVerified: property.isVerified,
//             }}
//           >
//             <Form.Item
//               label="Title"
//               name="title"
//               rules={[{ required: true, message: "Please enter the title" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="Description"
//               name="description"
//               rules={[{ required: true, message: "Please enter the description" }]}
//             >
//               <Input.TextArea />
//             </Form.Item>
//             <Form.Item
//               label="Property Listing Category"
//               name="propertyListingCategoryId"
//               rules={[{ required: true, message: "Please select a property listing category" }]}
//             >
//               <Select placeholder="Select a property listing category">
//                 {propertyListingCategories.map(category => (
//                   <Option key={category._id} value={category._id}>
//                     {category.propertyListingName}
//                   </Option>
//                 ))}
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Property Type"
//               name="propertyType"
//               rules={[{ required: true, message: "Please select a property type" }]}
//             >
//               <Select placeholder="Select a property type">
//                 <Option value="house_for_sale">House For Sale</Option>
//                 <Option value="land_for_sale">Land For Sale</Option>
//                 <Option value="for_rent">For Rent</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Condition"
//               name="condition"
//               rules={[{ required: true, message: "Please select the condition" }]}
//             >
//               <Select placeholder="Select condition">
//                 <Option value="brand_new">Brand New</Option>
//                 <Option value="used">Used</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Road to Property"
//               name="roadProperty"
//               rules={[{ required: true, message: "Please enter the road to property" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="Address"
//               name="address"
//               rules={[{ required: true, message: "Please enter the address" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="District"
//               name="district"
//               rules={[{ required: true, message: "Please select the district" }]}
//             >
//               <Select placeholder="Select district">
//                 <Option value="bhaktapur">Bhaktapur</Option>
//                 <Option value="kathmandu">Kathmandu</Option>
//                 <Option value="lalitpur">Lalitpur</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Price"
//               name="price"
//               rules={[{ required: true, message: "Please enter the price" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="Facilities"
//               name="facilities"
//             >
//               <Checkbox.Group>
//                 {[
//                   'earthquake_resistant',
//                   'electricity',
//                   'water_supply',
//                   'parking',
//                   'drainage',
//                   'gym',
//                   'elevator',
//                   'cctv',
//                   'modular_kitchen',
//                   'wifi',
//                   'garden',
//                   'school_college',
//                   'shopping_mall',
//                   'hospital',
//                   'pet_area',
//                   'children_play_area',
//                   'clubhouse',
//                   'jogging_track',
//                   'swimming_pool',
//                   'community_center',
//                   'rental_income',
//                   'garbage_disposal'
//                 ].map(facility => (
//                   <Checkbox key={facility} value={facility}>
//                     {facility.replace('_', ' ')}
//                   </Checkbox>
//                 ))}
//               </Checkbox.Group>
//             </Form.Item>
//             <Form.Item
//               label="Furnishing"
//               name="furnishing"
//               rules={[{ required: true, message: "Please select furnishing" }]}
//             >
//               <Select placeholder="Select furnishing">
//                 <Option value="not_furnishing">Not Furnishing</Option>
//                 <Option value="semi_furnishing">Semi Furnishing</Option>
//                 <Option value="full_furnishing">Full Furnishing</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Facing Direction"
//               name="facedTowards"
//               rules={[{ required: true, message: "Please select the facing direction" }]}
//             >
//               <Select placeholder="Select facing direction">
//                 <Option value="north">North</Option>
//                 <Option value="east">East</Option>
//                 <Option value="west">West</Option>
//                 <Option value="south">South</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Floors"
//               name="floors"
//               rules={[{ required: true, message: "Please enter the number of floors" }]}
//             >
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item
//               label="Living Rooms"
//               name="living"
//               rules={[{ required: true, message: "Please enter the number of living rooms" }]}
//             >
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item
//               label="Bathrooms"
//               name="bathrooms"
//               rules={[{ required: true, message: "Please enter the number of bathrooms" }]}
//             >
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item
//               label="Kitchens"
//               name="kitchen"
//               rules={[{ required: true, message: "Please enter the number of kitchens" }]}
//             >
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item
//               label="Beds"
//               name="beds"
//               rules={[{ required: true, message: "Please enter the number of beds" }]}
//             >
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item
//               label="Images"
//               name="images"
//               rules={[{ required: true, message: "Please upload at least one image" }]}
//             >
//               <Upload
//                 multiple
//                 beforeUpload={() => false}
//                 onChange={(info) => {
//                   const fileList = info.fileList.slice(-1);
//                   form.setFieldsValue({ images: fileList });
//                 }}
//               >
//                 <Button>Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[{ required: true, message: "Please enter the email" }]}
//             >
//               <Input type="email" />
//             </Form.Item>
//             <Form.Item
//               label="Phone"
//               name="phone"
//               rules={[
//                 { required: true, message: "Please enter the phone number" },
//                 { max: 10, message: "Phone number must be 10 digits" },
//                 { min: 10, message: "Phone number must be 10 digits" },
//               ]}
//             >
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item label="Verified" name="isVerified" valuePropName="checked">
//               <Switch checked={isVerified} onChange={(checked) => setIsVerified(checked)} />
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit" loading={loading}>
//                 Update Property
//               </Button>
//               <Button type="default" onClick={onCancel} style={{ marginLeft: "10px" }}>
//                 Cancel
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProperty;











import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Select, Checkbox, Upload, Switch } from "antd";
import { Toaster, toast } from 'react-hot-toast';

const { Option } = Select;

const EditProperty = ({ property, onCancel, getAllProperty }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [propertyListingCategories, setPropertyListingCategories] = useState([]);
  const [isVerified, setIsVerified] = useState(property.isVerified || false);

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

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/updateProperty/${property._id}`,
        { ...values, isVerified }
      );
      getAllProperty();
      onCancel(); // Close the modal
      toast.success("Property updated successfully!");
    } catch (error) {
      console.error("Error while updating property:", error);
      toast.error("Error while updating property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='register_property_container'>
      <Toaster />
      <div className="container propertyContainer">
        <h3>Edit Your Property</h3>
        <div className="formContainer">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              ...property,
              facilities: property.facilities || [],
              isVerified: property.isVerified,
              images: property.images || [],
            }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter the title" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter the description" }]}
            >
              <Input.TextArea />
            </Form.Item>
            {/* <Form.Item
              label="Property Listing Category"
              name="propertyListingCategoryId"
              rules={[{ required: true, message: "Please select a property listing category" }]}
            >
              <Select placeholder="Select a property listing category">
                {propertyListingCategories.map(category => (
                  <Option key={category._id} value={category._id}>
                    {category.propertyListingName}
                  </Option>
                ))}
              </Select>
            </Form.Item> */}
            <Form.Item
              label="Property Type"
              name="propertyType"
              rules={[{ required: true, message: "Please select a property type" }]}
            >
              <Select placeholder="Select a property type">
                <Option value="house_for_sale">House For Sale</Option>
                <Option value="land_for_sale">Land For Sale</Option>
                <Option value="for_rent">For Rent</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Condition"
              name="condition"
              rules={[{ required: true, message: "Please select the condition" }]}
            >
              <Select placeholder="Select condition">
                <Option value="brand_new">Brand New</Option>
                <Option value="used">Used</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Road to Property"
              name="roadProperty"
              rules={[{ required: true, message: "Please enter the road to property" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter the address" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="District"
              name="district"
              rules={[{ required: true, message: "Please select the district" }]}
            >
              <Select placeholder="Select district">
                <Option value="bhaktapur">Bhaktapur</Option>
                <Option value="kathmandu">Kathmandu</Option>
                <Option value="lalitpur">Lalitpur</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please enter the price" }]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              label="Facilities"
              name="facilities"
            >
              <Checkbox.Group>
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
                  <Checkbox key={facility} value={facility}>
                    {facility.replace('_', ' ')}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item> */}
            <Form.Item
              label="Furnishing"
              name="furnishing"
              rules={[{ required: true, message: "Please select furnishing" }]}
            >
              <Select placeholder="Select furnishing">
                <Option value="not_furnishing">Not Furnishing</Option>
                <Option value="semi_furnishing">Semi Furnishing</Option>
                <Option value="full_furnishing">Full Furnishing</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Facing Direction"
              name="facedTowards"
              rules={[{ required: true, message: "Please select the facing direction" }]}
            >
              <Select placeholder="Select facing direction">
                <Option value="north">North</Option>
                <Option value="east">East</Option>
                <Option value="west">West</Option>
                <Option value="south">South</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Floors"
              name="floors"
              rules={[{ required: true, message: "Please enter the number of floors" }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Living Rooms"
              name="living"
              rules={[{ required: true, message: "Please enter the number of living rooms" }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Bathrooms"
              name="bathrooms"
              rules={[{ required: true, message: "Please enter the number of bathrooms" }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Kitchens"
              name="kitchen"
              rules={[{ required: true, message: "Please enter the number of kitchens" }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Beds"
              name="beds"
              rules={[{ required: true, message: "Please enter the number of beds" }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Images"
              name="images"
              rules={[{ required: true, message: "Please upload at least one image" }]}
            >
              <Upload
                multiple
                beforeUpload={() => false}
                onChange={(info) => {
                  const fileList = info.fileList.slice(-1);
                  form.setFieldsValue({ images: fileList });
                }}
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter the email" }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter the phone number" },
                { max: 10, message: "Phone number must be 10 digits" },
                { min: 10, message: "Phone number must be 10 digits" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Verified" name="isVerified" valuePropName="checked">
              <Switch checked={isVerified} onChange={(checked) => setIsVerified(checked)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Update Property
              </Button>
              <Button onClick={onCancel} style={{ marginLeft: "10px" }}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;
