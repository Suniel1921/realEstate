import React, { useState, useEffect } from 'react';
import SideMenu from '../adminDashboard/sideMenu/SideMenu';
import axios from 'axios';
import '../createRoom/createRoom.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const CreateRoom = () => {
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryPurposes, setCategoryPurposes] = useState([]);

    useEffect(() => {
        // Fetch categories
        axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/allCategory`)
            .then(response => {
                if (response.data.success) {
                    setCategories(response.data.allCategory);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                toast.error("Error fetching categories");
            });

        // Fetch category purposes
        axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/categoryPurpose/allCategoryPurpose`)
            .then(response => {
                if (response.data.success) {
                    setCategoryPurposes(response.data.allCategoryPurpose);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching category purposes:', error);
                toast.error("Error fetching category purposes");
            });
    }, []);

    const handleImageChange = (e, setFieldValue) => {
        setImages([...images, ...Array.from(e.target.files)]);
        setFieldValue("images", [...images, ...Array.from(e.target.files)]);
    };

    return (
        <>
            <div className='createRoom_container'>
                <div className='sideMenuContainer'>
                    <div className="sidemenu"><SideMenu /></div>

                    <div className='createRoom'>
                        <h2>Upload Your Property Fom Here 🚀</h2>
                        <Formik
                            initialValues={{
                                heading: '',
                                price: '',
                                address: '',
                                phone: '',
                                categoryId: '',
                                categoryPurposeId: '',
                                images: []
                            }}
                            validationSchema={Yup.object({
                                heading: Yup.string().required('Heading is required'),
                                price: Yup.number().required('Price is required').positive('Price must be a positive number'),
                                address: Yup.string().required('Address is required'),
                                phone: Yup.string().required('Phone number is required'),
                                categoryId: Yup.string().required('Category ID is required'),
                                categoryPurposeId: Yup.string().required('Category Purpose ID is required'),
                                images: Yup.array().min(1, 'At least one image is required')
                            })}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                // Show toast indicating photo is uploading
                                const toastId = toast.loading('Uploading photos. Please wait...', { duration: null });

                                const formData = new FormData();
                                formData.append('heading', values.heading);
                                formData.append('price', values.price);
                                formData.append('address', values.address);
                                formData.append('phone', values.phone);
                                formData.append('categoryId', values.categoryId);
                                formData.append('categoryPurposeId', values.categoryPurposeId);
                                for (let i = 0; i < values.images.length; i++) {
                                    formData.append('images', values.images[i]);
                                }

                                try {
                                    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/uploadImg`, formData, {
                                        headers: {
                                            'Content-Type': 'multipart/form-data'
                                        }
                                    });
                                    // console.log(response.data);
                                    if (response.data.success) {
                                        toast.success(response.data.message);
                                        resetForm();
                                    }
                                } catch (error) {
                                    console.error('Error uploading images:', error);
                                    toast.error("Error uploading images");
                                }
                                
                                // Hide the loading toast
                                toast.dismiss(toastId);

                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting, setFieldValue }) => (
                                <Form className='create_Room_form'>
                                    <div>
                                        {/* <label htmlFor="heading">Heading:</label> */}
                                        <Field type="text" name="heading" placeholder="Heading" />
                                        <ErrorMessage name="heading" component="div" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="price">Price:</label> */}
                                        <Field type="number" name="price" placeholder="Price" />
                                        <ErrorMessage name="price" component="div" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="address">Address:</label> */}
                                        <Field type="text" name="address" placeholder="Address" />
                                        <ErrorMessage name="address" component="div" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="phone">Phone:</label> */}
                                        <Field type="number" name="phone" placeholder="Phone" />
                                        <ErrorMessage name="phone" component="div" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="categoryId">Category:</label> */}
                                        <Field className="selectCategory" as="select" name="categoryId">
                                            <option value="" className='selectText'>Select a category</option>
                                            {categories.map(category => (
                                                <option key={category._id} value={category._id}>{category.categoryName}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="categoryId" component="div" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="categoryPurposeId">Category Purpose:</label> */}
                                        <Field className='selectCategory' as="select" name="categoryPurposeId">
                                            <option className='selectText' value="">Select a category purpose</option>
                                            {categoryPurposes.map(categoryPurpose => (
                                                <option key={categoryPurpose._id} value={categoryPurpose._id}>{categoryPurpose.name}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="categoryPurposeId" component="div" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="images">Images:</label> */}
                                        <input type="file" multiple onChange={(e) => handleImageChange(e, setFieldValue)} />
                                        <ErrorMessage name="images" component="div" className="error" />
                                    </div>
                                    <button className='postYourPropertBtn' type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting' : 'Submit'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRoom;










