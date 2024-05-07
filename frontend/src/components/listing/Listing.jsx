// import React, { useEffect, useState } from "react";
// import "../listing/listing.css";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GiTakeMyMoney } from "react-icons/gi";
// import toast from 'react-hot-toast';
// import axios from 'axios';

// const Listing = () => {
//     const [listingData, setListingData] = useState([]);

//     const getAllData = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`);
//             if (response.data.success) {
//                 setListingData(response.data.allData);
//             }

//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message);
//             } else {
//                 toast.error('Something went wrong');
//             }
//         }
//     }

//     useEffect(() => {
//         getAllData();
//     }, []);

//     return (
//         <>
//             <div className="listing">
//                 <h2>Special Listing</h2>
//                 <div className="listing_container">
//                     {listingData.map((data) => (
//                         <div className="listing_card" key={data._id}>
//                             {/* Displaying only the first image */}
//                             {data.images.length > 0 && (
//                                 <img className="house_img" src={data.images[0]} alt="House" />
//                             )}
//                             <div className="listing_card_content">
//                                 <h2>{data.heading}</h2>
//                                 <div className="rupeess location">
//                                     <p className="icon"><GiTakeMyMoney /></p>
//                                     <h4>Rs {data.price}</h4>
//                                 </div>
//                                 <div className="location">
//                                     <p className="icon"><FaLocationDot /></p>
//                                     <h4>{data.address}</h4>
//                                 </div>
//                                 <div className="phone location">
//                                     <p className="icon"><FaPhoneAlt /></p>
//                                     <h4>{data.phone}</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Listing;






import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../listing/listing.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import toast from 'react-hot-toast';
import axios from 'axios';

const Listing = () => {
    const [listingData, setListingData] = useState([]);

    const getAllData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllData`);
            if (response.data.success) {
                setListingData(response.data.allData);
            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something went wrong');
            }
        }
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <>
            <div className="listing">
                <h2>Special Listing</h2>
                <div className="listing_container">
                    {listingData.map((data) => (
                        <div className="listing_card" key={data._id}>
                            <Link to={`/single/${data._id}`} className="listing_link"> {/* Redirects to single page */}
                                {/* Displaying only the first image */}
                                {data.images.length > 0 && (
                                    <img className="house_img" src={data.images[0]} alt="House" />
                                )}
                                <div className="listing_card_content">
                                    <h2>{data.heading}</h2>
                                    <div className="rupeess location">
                                        <p className="icon"><GiTakeMyMoney /></p>
                                        <h4>Rs {data.price}</h4>
                                    </div>
                                    <div className="location">
                                        <p className="icon"><FaLocationDot /></p>
                                        <h4>{data.address}</h4>
                                    </div>
                                    <div className="phone location">
                                        <p className="icon"><FaPhoneAlt /></p>
                                        <h4>{data.phone}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Listing;
