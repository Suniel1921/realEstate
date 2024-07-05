// import React, { useEffect, useState } from "react";
// import SideMenu from "../../adminDashboard/sideMenu/SideMenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Table, Space, Button, Modal, message } from "antd";
// import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
// import EditProperty from "./EditProperty";
// import '../../createRoom/manageProperty/manageProperty.css';

// const { confirm } = Modal;

// const ManageProperty = () => {
//   const [propertyData, setPropertyData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   const columns = [
//     {
//       title: "Image",
//       dataIndex: "images",
//       key: "images",
//       render: (images) => (
//         <img src={images[0]} alt="Property" style={{ width: "100px" }} />
//       ),
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Heading",
//       dataIndex: "heading",
//       key: "heading",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       key: "price",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <Space size="middle">
//           <Button style={{backgroundColor: '#687cfe'}}
//             type="primary"
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record)}
//           >
//             Edit
//           </Button>

//           <Button
//             type="danger"
//             icon={<DeleteOutlined />}
//             onClick={() => showDeleteConfirm(record._id)}
//           >
//             Delete
//           </Button>

//         </Space>
//       ),
//     },
//   ];

//   const getAllProperty = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userProperty`);
//       console.log(response);
//       if (response.data.success) {
//         setPropertyData(response.data.allData);
//         getAllProperty();
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (property) => {
//     setSelectedProperty(property);
//     setModalVisible(true);
//   };

//   const handleDelete = async (propertyId) => {
//     try {
//       setLoading(true);
//       await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/deleteProperty/${propertyId}`);
//       message.success("Property deleted successfully");
//       getAllProperty();
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showDeleteConfirm = (propertyId) => {
//     confirm({
//       title: 'Are you sure you want to delete this property?',
//       icon: <ExclamationCircleOutlined />,
//       okText: 'Yes',
//       okType: 'danger',
//       cancelText: 'No',
//       onOk() {
//         handleDelete(propertyId);
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   };

//   useEffect(() => {
//     getAllProperty();
//   }, []);

//   const paginationConfig = {
//     pageSize: 6,
//     itemRender: (current, type, originalElement) => {
//       if (type === 'page') {
//         return <div style={{ color: 'gray' }}>{current}</div>;
//       }
//       return originalElement;
//     },
//   };

//   return (
//     <>
//       <div className="manageProperty_container">
//         <div className="sideMenuContainer">
//           <div className="sidemenu">
//             <SideMenu />
//           </div>

//           <div className="manageProperty">
//             <Table
//               columns={columns}
//               dataSource={propertyData}
//               loading={loading}
//               rowKey="_id"
//               pagination={propertyData.length > paginationConfig.pageSize ? paginationConfig : false}
//             />
//           </div>
//         </div>
//       </div>
//       <Modal
//         title="Edit Property"
//         open={modalVisible}
//         onCancel={() => setModalVisible(false)}
//         footer={null}
//       >
//         <EditProperty
//           property={selectedProperty}
//           onCancel={() => setModalVisible(false)}
//           getAllProperty={getAllProperty}
//         />
//       </Modal>
//     </>
//   );
// };

// export default ManageProperty;









import React, { useEffect, useState } from "react";
import SideMenu from "../../adminDashboard/sideMenu/SideMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Table, Space, Button, Modal, message } from "antd";
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import EditProperty from "./EditProperty";
import '../../createRoom/manageProperty/manageProperty.css';

const { confirm } = Modal;

const ManageProperty = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (images) => (
        <img src={images[0]} alt="Property" style={{ width: "100px" }} />
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Heading",
      dataIndex: "heading",
      key: "heading",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button style={{backgroundColor: '#687cfe'}}
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>

          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(record._id)}
          >
            Delete
          </Button>

        </Space>
      ),
    },
  ];

  const getAllProperty = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/userProperty`);
      console.log(response);
      if (response.data.success) {
        setPropertyData(response.data.allProperties);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (property) => {
    setSelectedProperty(property);
    setModalVisible(true);
  };

  const handleDelete = async (propertyId) => {
    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/userProperty/deleteProperty/${propertyId}`);
      message.success("Property deleted successfully");
      getAllProperty();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const showDeleteConfirm = (propertyId) => {
    confirm({
      title: 'Are you sure you want to delete this property?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(propertyId);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  useEffect(() => {
    getAllProperty();
  }, []);

  const paginationConfig = {
    pageSize: 6,
    itemRender: (current, type, originalElement) => {
      if (type === 'page') {
        return <div style={{ color: 'gray' }}>{current}</div>;
      }
      return originalElement;
    },
  };

  return (
    <>
      <div className="manageProperty_container">
        <div className="sideMenuContainer">
          <div className="sidemenu">
            <SideMenu />
          </div>

          <div className="manageProperty">
            <Table
              columns={columns}
              dataSource={propertyData}
              loading={loading}
              rowKey="_id"
              // pagination={propertyData.length > paginationConfig.pageSize ? paginationConfig : false}
            />
          </div>
        </div>
      </div>
      <Modal
        title="Edit Property"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <EditProperty
          property={selectedProperty}
          onCancel={() => setModalVisible(false)}
          getAllProperty={getAllProperty}
        />
      </Modal>
    </>
  );
};

export default ManageProperty;
