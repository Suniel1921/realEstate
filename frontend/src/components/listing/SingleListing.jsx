
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Loading from "../loading/Loading";
// import "../listing/singleListing.css";


// const SingleListing = () => {
//     const { id } = useParams();
//     const [property, setProperty] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [mainImage, setMainImage] = useState(null);
//     const [relatedProducts, setRelatedProducts] = useState([]);

//     useEffect(() => {
//         const fetchProperty = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/singleProperty/${id}`);
//                 if (response.data.success) {
//                     setProperty(response.data.singleProperty);
//                     // Set the main image to the first image in the array
//                     if (response.data.singleProperty.images.length > 0) {
//                         setMainImage(response.data.singleProperty.images[0]);
//                     }
//                 } else {
//                     toast.error("Failed to fetch property details");
//                 }
//             } catch (error) {
//                 toast.error("Failed to fetch property details");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProperty();
//     }, [id]);

//     useEffect(() => {
//         const fetchRelatedProducts = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/getRelatedProducts/${id}`);
//                 console.log(response)
//                 if (response.data.success) {
//                     setRelatedProducts(response.data.relatedProducts);
//                 } else {
//                     toast.error("Failed to fetch related products");
//                 }
//             } catch (error) {
//                 toast.error("Failed to fetch related products");
//             }
//         };

//         fetchRelatedProducts();
//     }, [id]);

//     const handleThumbnailClick = (image) => {
//         setMainImage(image);
//     };

//     if (loading) {
//         return <Loading />;
//     }

//     if (!property) {
//         return <div>No property found.</div>;
//     }

//     return (
//         <div className="singleListing_container">
//             <div className="container listContainer propertyimgAndDetailsContainer">
//                 <div className="left_listing">
//                     <div className="single_listing">
//                         <div className="main_image_container">
//                             {/* Display the main image */}
//                             <img
//                                 className="main_image"
//                                 src={mainImage}
//                                 alt="Property"
//                             />
//                         </div>
//                         <div className="thumbnail_container">
//                             {/* Display thumbnails */}
//                             {property.images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     className="thumbnail_image"
//                                     src={image}
//                                     alt={`Property Thumbnail ${index}`}
//                                     onClick={() => handleThumbnailClick(image)}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="right_listing">
//                     <div className="right_listing_header">
//                         <h3><i className="fas fa-home"></i> Property Details</h3>
//                     </div>
//                     <div className="property_details">
//                         <p>Title: {property.title}</p>
//                         <p>Description: {property.description}</p>
//                         <p>Price: Rs {property.price}</p>
//                         <p>Location: {property.address}</p>
//                         <p>Phone: {property.phone}</p>
//                         <p>Property Type: {property.propertyType}</p>
//                         {/* <p>Property Type: {property.propertyListingCategory}</p> */}
//                     </div>
//                     <div className="room_details">
//                         <h3><i className="fas fa-bed"></i> Room Details</h3>
//                         <div className="roomDetails">
//                             <p>Floors: {property.floors}</p>
//                             <p>Living: {property.living}</p>
//                             <p>Bathrooms: {property.bathrooms}</p>
//                             <p>Kitchen: {property.kitchen}</p>
//                             <p>Beds: {property.beds}</p>
//                         </div>
//                     </div>
//                     <div className="user_details">
//                         <h3><i className="fas fa-user"></i> Room Owner Details</h3>
//                         <p>Email: {property.email}</p>
//                         <p>Phone: {property.phone}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Related Products Section */}
//             <div className="related_products">
//                 <h3>Related Property</h3>
//                 <div className="related_products_list">
//                     {relatedProducts.length > 0 ? (
//                         relatedProducts.map((product) => (
//                             <div key={product._id} className="related_product">
//                                 <Link to={`/single/${product._id}`} className="relatedProduct_link">
//                                     <img src={product.images[0]} alt="Related Property" />
//                                     <p>{product.title}</p>
//                                     <p>Price: Rs {product.price}</p>
//                                     <p>Location: {product.address}</p>
//                                     {/* Add more details if needed */}
//                                 </Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No related properties found</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleListing;





import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaHome, FaBed, FaUser } from 'react-icons/fa'; // Importing required icons
import Loading from "../loading/Loading";
import "../listing/singleListing.css";

const SingleListing = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/singleProperty/${id}`);
                if (response.data.success) {
                    setProperty(response.data.singleProperty);
                    // Set the main image to the first image in the array
                    if (response.data.singleProperty.images.length > 0) {
                        setMainImage(response.data.singleProperty.images[0]);
                    }
                } else {
                    toast.error("Failed to fetch property details");
                }
            } catch (error) {
                toast.error("Failed to fetch property details");
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/getRelatedProducts/${id}`);
                console.log(response)
                if (response.data.success) {
                    setRelatedProducts(response.data.relatedProducts);
                } else {
                    toast.error("Failed to fetch related products");
                }
            } catch (error) {
                toast.error("Failed to fetch related products");
            }
        };

        fetchRelatedProducts();
    }, [id]);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    if (loading) {
        return <Loading />;
    }

    if (!property) {
        return <div>No property found.</div>;
    }

    return (
        <div className="singleListing_container">
            <div className="container listContainer propertyimgAndDetailsContainer">
                <div className="left_listing">
                    <div className="single_listing">
                        <div className="main_image_container">
                            {/* Display the main image */}
                            <img
                                className="main_image"
                                src={mainImage}
                                alt="Property"
                            />
                        </div>
                        <div className="thumbnail_container">
                            {/* Display thumbnails */}
                            {property.images.map((image, index) => (
                                <img
                                    key={index}
                                    className="thumbnail_image"
                                    src={image}
                                    alt={`Property Thumbnail ${index}`}
                                    onClick={() => handleThumbnailClick(image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right_listing">
                    <div className="right_listing_header">
                        <h3><FaHome /> Property Details</h3> 
                    </div>
                    <div className="property_details">
                        <p>Title: {property.title}</p>
                        <p>Description: {property.description}</p>
                        <p>Price: Rs {property.price}</p>
                        <p>Location: {property.address}</p>
                        <p>Phone: {property.phone}</p>
                        <p>Property Type: {property.propertyType}</p>
                    </div>
                    <div className="room_details">
                        <h3><FaBed /> Room Details</h3> 
                        <div className="roomDetails">
                            <p>Floors: {property.floors}</p>
                            <p>Living: {property.living}</p>
                            <p>Bathrooms: {property.bathrooms}</p>
                            <p>Kitchen: {property.kitchen}</p>
                            <p>Beds: {property.beds}</p>
                        </div>
                    </div>
                    <div className="user_details">
                        <h3><FaUser /> Room Owner Details</h3> 
                        <p>Email: {property.email}</p>
                        <p>Phone: {property.phone}</p>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="related_products">
                <h3>Related Property</h3>
                <div className="related_products_list">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((product) => (
                            <div key={product._id} className="related_product">
                                <Link to={`/single/${product._id}`} className="relatedProduct_link">
                                    <img className="relatedPropertyImg" src={product.images[0]} alt="Related Property" />
                                    <p>{product.title}</p>
                                    <p>Price: Rs {product.price}</p>
                                    <p>Location: {product.address}</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No related properties found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleListing;
