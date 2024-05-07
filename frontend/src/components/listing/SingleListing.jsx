import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import { GiTakeMyMoney } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import '../listing/singleListing.css'

const SingleListing = () => {
    const { id } = useParams(); // Get the id from the URL parameter
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        const getSingleData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getSingleData/${id}`);
                if (response.data.success) {
                    setSingleData(response.data.singleData);
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error('Something went wrong');
            }
        };
        getSingleData();
    }, [id]);

    return (
        <div>
            {singleData && (
                <div className="single_listing">
                    <img className="single_page_house_img" src={singleData.images[0]} alt="House" />
                    <div className="single_listing_content">
                        <h2>{singleData.heading}</h2>
                        <div className="rupeess location">
                            <p className="icon"><GiTakeMyMoney/></p>
                            <h4>Rs {singleData.price}</h4>
                        </div>
                        <div className="location">
                            <p className="icon"><FaLocationDot /></p>
                            <h4>{singleData.address}</h4>
                        </div>
                        <div className="phone location">
                            <p className="icon"><FaPhoneAlt /></p>
                            <h4>{singleData.phone}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleListing;
