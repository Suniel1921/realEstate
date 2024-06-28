import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../loading/Loading";

const AllUserProperty = ({ onDataFetched }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userProperty`);
                if (response.data.success) {
                    console.log("Fetched user properties:", response.data.properties); // Debugging log
                    onDataFetched(response.data.properties);
                } else {
                    toast.error("Something went wrong");
                }
            } catch (error) {
                toast.error("Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [onDataFetched]);

    if (loading) {
        return <Loading />;
    }

    return null;
};

export default AllUserProperty;
