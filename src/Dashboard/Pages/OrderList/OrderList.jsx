import { useEffect, useState } from "react";
import bg from "../../../../public/Login-background.jpg";
import axios from "axios";
import Swal from "sweetalert2";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(false);

  const statuses = ["All", "Pending", "Shipped", "Delivered"];

  // Fetch orders from the database
  const getOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/orders`, {
        params: {
          status: selectedStatus === "All" ? "" : selectedStatus,
          page: currentPage,
          limit: ordersPerPage,
        },
      });

      setOrders(res.data.orders);
      setTotalOrders(res.data.totalCount); // Assuming API returns total count
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, [currentPage, selectedStatus]);

  // Calculate total pages
  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle delete order
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/orders/${id}`);
          setOrders((prevOrders) =>
            prevOrders.filter((order) => order._id !== id)
          );
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Order deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          getOrders();
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete order!",
          });
        }
      }
    });
  };

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="px-4 mx-auto bg-cover bg-center min-h-screen w-full bg-white"
    >
      <div className="flex flex-col mb-6">
        {/* Filter by Order Status */}
        <h1 className="text-md md:text-3xl font-extrabold mx-auto uppercase p-5">
          Order List
        </h1>
        <div className="mb-4">
          <label className="mr-2 font-medium text-gray-700">
            Filter by Status:
          </label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
          >
            {statuses.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Order ID
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Customer Name
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    orders.map((order, index) => (
                      <tr key={order._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          {order._id}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {order.customerName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {order.status}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <button
                            type="button"
                            className="btn btn-error"
                            onClick={() => handleDelete(order._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <button
            className={`px-4 py-2 text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
