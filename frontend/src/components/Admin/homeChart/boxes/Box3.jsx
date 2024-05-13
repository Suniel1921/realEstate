// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import "../boxes/box3.css";

// const Box3 = () => {
//   const [count, setCount] = useState([]);

//   const userCount = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/userCount`
//       );
//       console.log(response);
//       if (response.data.success) {
//         setCount(response.data.count);
//       } else {
//         toast.error("something went wrong");
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("something went wrong");
//       }
//     }
//   };

//   useEffect(() => {
//     userCount();
//   }, []);

//   return (
//     <>
//       <div className="box3_container">
//         <h3>Total Users</h3>
//         <div className="userCountBg">
//           <h2 className="userCount">{count}</h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Box3;

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import "../boxes/box3.css";

const Box3 = () => {
  const [count, setCount] = useState(0); // Initialize count with 0

  const userCount = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/userCount`
      );
      // console.log(response);
      if (response.data.success) {
        setCount(response.data.count);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    userCount();
  }, []);

  // Example data for chart with fluctuating values
  const chartData = [
    { name: "Day 1", users: 100 },
    { name: "Day 2", users: 150 },
    { name: "Day 3", users: 80 },
    { name: "Day 4", users: 200 },
    { name: "Day 5", users: 50 },
    { name: "Day 6", users: 180 },
    { name: "Day 7", users: count }, // Use count for the current day's users
  ];

  return (
    <div className="box3_container">
      <div className="box3">
        <h3>Total Users</h3>
        <div className="userCountBg">
          <h2 className="userCount">{count}</h2>
        </div>
      </div>

      <ResponsiveContainer width="99%" height={50}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Box3;
