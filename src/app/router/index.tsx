import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Trang chủ (Home)</div>,
    errorElement: <div>Đã xảy ra lỗi hoặc trang không tồn tại (404)!</div>,
    children: [
      // Khai báo các route con ở đây nếu bạn dùng layout (Outlet)
      // Ví dụ: { path: "dashboard", element: <div>Dashboard</div> },
    ],
  },
  // Bạn có thể thêm các route cha khác ngang hàng với "/"
]);