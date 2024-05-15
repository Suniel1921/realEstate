// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import "../listing/singleListing.css";

// const SingleListing = () => {
//   const { id } = useParams(); // Get the id from the URL parameter
//   const [singleData, setSingleData] = useState(null);
//   const [mainImage, setMainImage] = useState("");

//   useEffect(() => {
//     const getSingleData = async () => {
//       try {
//         const response = await axios.get(
//           `${
//             import.meta.env.VITE_REACT_APP_URL
//           }/api/v1/upload/getSingleData/${id}`
//         );
//         if (response.data.success) {
//           setSingleData(response.data.singleData);
//           // Set the main image to the first image in the array
//           if (response.data.singleData.images.length > 0) {
//             setMainImage(response.data.singleData.images[0]);
//           }
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         toast.error("Something went wrong");
//       }
//     };
//     getSingleData();
//   }, [id]);

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//   };

//   return (
//     <div className="singleListing_container">
//       <div className="container">
//         <div className="left_listing">
//           <div>
//             {singleData && (
//               <div className="single_listing">
//                 <div className="main_image_container">
//                   {/* Display the main image */}
//                   <img
//                     className="main_image"
//                     src={mainImage}
//                     alt="Main House"
//                   />
//                 </div>
//                 <div className="thumbnail_container">
//                   {/* Display thumbnails */}
//                   {singleData.images.map((image, index) => (
//                     <img
//                       key={index}
//                       className="thumbnail_image"
//                       src={image}
//                       alt={`House ${index + 1}`}
//                       onClick={() => handleThumbnailClick(image)}
//                     />
//                   ))}
//                 </div>
//                 <div className="single_listing_content">
//                   <h2>{singleData.heading}</h2>
//                   <div className="rupeess location">
//                     <p className="icon">
//                       <GiTakeMyMoney />
//                     </p>
//                     <h4>Rs {singleData.price}</h4>
//                   </div>
//                   <div className="location">
//                     <p className="icon">
//                       <FaLocationDot />
//                     </p>
//                     <h4>{singleData.address}</h4>
//                   </div>
//                   <div className="phone location">
//                     <p className="icon">
//                       <FaPhoneAlt />
//                     </p>
//                     <h4>{singleData.phone}</h4>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="right_listing"></div>
//       </div>
//     </div>
//   );
// };

// export default SingleListing;






import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "../listing/singleListing.css";

const SingleListing = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const [singleData, setSingleData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/api/v1/upload/getSingleData/${id}`
        );
        if (response.data.success) {
          setSingleData(response.data.singleData);
          // Set the main image to the first image in the array
          if (response.data.singleData.images.length > 0) {
            setMainImage(response.data.singleData.images[0]);
            // Set the first thumbnail as active initially
            setActiveThumbnail(response.data.singleData.images[0]);
          }
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    getSingleData();
  }, [id]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setActiveThumbnail(image);
  };

  return (
    <div className="singleListing_container">
      <div className="container">
        <div className="left_listing">
          <div>
            {singleData && (
              <div className="single_listing">
                <div className="main_image_container">

                <div className="single_listing_content">
                  <h2>{singleData.heading}</h2>
                  <div className="rupeess location">
                    <p className="icon">
                      <GiTakeMyMoney />
                    </p>
                    <h4>Rs {singleData.price}</h4>
                  </div>
                  <div className="location">
                    <p className="icon">
                      <FaLocationDot />
                    </p>
                    <h4>{singleData.address}</h4>
                  </div>
                  <div className="phone location">
                    <p className="icon">
                      <FaPhoneAlt />
                    </p>
                    <h4>{singleData.phone}</h4>
                  </div>
                </div>

                  {/* Display the main image */}
                  <img
                    className="main_image"
                    src={mainImage}
                    alt="Main House"
                  />
                </div>
                <div className="thumbnail_container">
                  {/* Display thumbnails */}
                  {singleData.images.map((image, index) => (
                    <img
                      key={index}
                      style={{
                        filter:
                          activeThumbnail === image
                            ? "none"
                            : "blur(2px)"
                      }}
                      className="thumbnail_image"
                      src={image}
                      alt={`House ${index + 1}`}
                      onClick={() => handleThumbnailClick(image)}
                    />
                  ))}
                </div>
               
              </div>
            )}
          </div>
        </div>
        <div className="right_listing">
          <h3>Related Properties</h3>
          <img src="/image/house.jpg" alt="house image" />
          <h3>testing</h3>
          <p>testing para goes here</p>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;

