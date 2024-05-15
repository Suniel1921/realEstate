
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Table, Modal, Input, message } from 'antd';
// import '../createCategory/manageCategory.css';

// const { confirm } = Modal;

// const ManageCategory = () => {
//     const [categoryList, setCategoryList] = useState([]);
//     const [editingCategory, setEditingCategory] = useState(null); // State to hold category being edited
//     const [newCategoryName, setNewCategoryName] = useState(""); // State to hold new category name for editing

//     const [currentPage, setCurrentPage] = useState(1); // State to track current page
//     const [pageSize, setPageSize] = useState(5); // State to track page size

//     const getAllCategory = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/allCategory`);
//             if (response.data.success) {
//                 setCategoryList(response.data.allCategory);
//                 getAllCategory();
//             } else {
//                 message.error("Something went wrong");
//             }
//         } catch (error) {
//             message.error("Something went wrong");
//         }
//     }

//     useEffect(() => {
//         getAllCategory();
//     }, []);

//     const handleEditCategory = (category) => {
//         setEditingCategory(category);
//         setNewCategoryName(category.categoryName);
//     }

//     const handleUpdateCategory = async () => {
//         try {
//             const response = await axios.put(
//                 `${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/updateCategory/${editingCategory._id}`,
//                 { categoryName: newCategoryName }
//             );
//             if (response.data.success) {
//                 message.success(response.data.message);
//                 getAllCategory();
//                 setEditingCategory(null);
//             } else {
//                 message.error("Something went wrong");
//             }
//         } catch (error) {
//             message.error("Something went wrong");
//         }
//     }

//     const showDeleteConfirm = (category) => {
//         confirm({
//             title: 'Are you sure you want to delete this category?',
//             content: `${category.categoryName}`,
//             okText: 'Yes',
//             okType: 'danger',
//             cancelText: 'No',
//             async onOk() {
//                 try {
//                     const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/category/deleteCategory/${category._id}`);
//                     if (response.data.success) {
//                         message.success(response.data.message);
//                         getAllCategory();
//                     } else {
//                         message.error("Something went wrong");
//                     }
//                 } catch (error) {
//                     message.error("Something went wrong");
//                 }
//             },
//             onCancel() {
//                 console.log('Cancel');
//             },
//         });
//     }

//     const handlePageChange = (page, pageSize) => {
//         setCurrentPage(page);
//     }

//     const columns = [
//         {
//             title: 'Category Name',
//             dataIndex: 'categoryName',
//             key: 'categoryName'
//         },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (text, record) => (
//                 <span>
//                     <Button onClick={() => handleEditCategory(record)}>Edit</Button>
//                     <Button type="danger" onClick={() => showDeleteConfirm(record)}>Delete</Button>
//                 </span>
//             ),
//         },
//     ];

//     return (
//         <>
//             <div className='manageCategory_container'>
//                 <Table style={{color: 'red'}}
//                     columns={columns}
//                     dataSource={categoryList}
//                     pagination={{
//                         color: "gray",
//                         current: currentPage,
//                         pageSize: pageSize,
//                         onChange: handlePageChange,
//                         showSizeChanger: false,
//                         total: categoryList.length,
//                         showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
//                     }}
//                 />
//             </div>

//             <Modal
//                 title="Edit Category"
//                 open={!!editingCategory}
//                 onOk={handleUpdateCategory}
//                 onCancel={() => setEditingCategory(null)}
//             >
//                 <Input
//                     value={newCategoryName}
//                     onChange={(e) => setNewCategoryName(e.target.value)}
//                 />
//             </Modal>
//         </>
//     );
// }

// export default ManageCategory;





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Input, message } from 'antd';
import '../createCategory/manageCategory.css';

const { confirm } = Modal;

const ManageCategoryPurpose = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const getAllCategory = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/categoryPurpose/allCategoryPurpose`);
            if (response.data.success) {
                setCategoryList(response.data.allCategoryPurpose);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            message.error("Something went wrong");
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

    const handleEditCategory = (category) => {
        setEditingCategory(category);
        setNewCategoryName(category.name);
    }

    const handleUpdateCategory = async () => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/categoryPurpose/updateCategory/${editingCategory._id}`,
                { name: newCategoryName }
            );
            if (response.data.success) {
                message.success(response.data.message);
                getAllCategory();
                setEditingCategory(null);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            console.error("Error updating category:", error);
            message.error("Something went wrong");
        }
    }

    const showDeleteConfirm = (category) => {
        confirm({
            title: 'Are you sure you want to delete this category?',
            content: `${category.name}`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            async onOk() {
                try {
                    const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/categoryPurpose/deleteCategory/${category._id}`);
                    if (response.data.success) {
                        message.success(response.data.message);
                        getAllCategory();
                    } else {
                        message.error(response.data.message);
                    }
                } catch (error) {
                    console.error("Error deleting category:", error);
                    message.error("Something went wrong");
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => handleEditCategory(record)}>Edit</Button>
                    <Button type="danger" onClick={() => showDeleteConfirm(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    return (
        <>
            <div className='manageCategory_container'>
                <Table
                    columns={columns}
                    dataSource={categoryList}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        onChange: handlePageChange,
                        showSizeChanger: false,
                        total: categoryList.length,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                        itemRender: (current, type, originalElement) => {
                            if (type === 'page') {
                                return <span style={{ color: 'gray' }}>{current}</span>;
                            }
                            return originalElement;
                        },
                    }}
                />
            </div>

            <Modal
                title="Edit Category"
                open ={!!editingCategory}
                onOk={handleUpdateCategory}
                onCancel={() => setEditingCategory(null)}
            >
                <Input
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                />
            </Modal>
        </>
    );
}

export default ManageCategoryPurpose;
