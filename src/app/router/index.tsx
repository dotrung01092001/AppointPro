/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTE_PATHS } from "./route-paths";
import ProtectedRoute from "./protected-route";
import RoleRoute from "./role-route";
import AppLayout from "../../components/layout/app-layout";
import LoginPage from "../../pages/auth/login-page";

function DashboardPage() {
  return <div>Dashboard Page</div>
}

function AppointmentsPage() {
  return <div>Appointments Page</div>
}

function AppointmentDetailPage() {
  return <div>Appointment Detail Page</div>
}

function CalendarPage() {
  return <div>Calendar Page</div>
}

function CustomersPage() {
  return <div>Customers Page</div>
}

function CustomerDetailPage() {
  return <div>Customer Detail Page</div>
}

function StaffPage() {
  return <div>Staff Page</div>
}

function StaffDetailPage() {
  return <div>Staff Detail Page</div>
}

function MySchedulePage() {
  return <div>My Schedule Page</div>
}

function MyServicesPage() {
  return <div>My Services Page</div>
}

function ServicesPage() {
  return <div>Services Page</div>
}

function UsersPage() {
  return <div>Users Page</div>
}

function NotificationsPage() {
  return <div>Notifications Page</div>
}

function SettingsPage() {
  return <div>Business Settings Page</div>
}

function ProfilePage() {
  return <div>Profile Page</div>
}

function ChangePasswordPage() {
  return <div>Change Password Page</div>
};



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTE_PATHS.DASHBOARD} replace />
  },

  {
    path: ROUTE_PATHS.LOGIN,
    element: <LoginPage />
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: ROUTE_PATHS.DASHBOARD,
            element: <DashboardPage />
          },

          {
            path: ROUTE_PATHS.APPOINTMENTS,
            element: <AppointmentsPage />
          },

          {
            path: ROUTE_PATHS.APPOINTMENT_DETAIL,
            element: <AppointmentDetailPage />
          },

          {
            path: ROUTE_PATHS.CALENDAR,
            element: <CalendarPage />
          },

          {
            path: ROUTE_PATHS.CUSTOMERS,
            element: <CustomersPage />
          },

          {
            path: ROUTE_PATHS.CUSTOMER_DETAIL,
            element: <CustomerDetailPage />
          },

          {
            path: ROUTE_PATHS.STAFF,
            element: <StaffPage />
          },

          {
            path: ROUTE_PATHS.STAFF_DETAIL,
            element: <StaffDetailPage />
          },

          {
            path: ROUTE_PATHS.MY_SCHEDULES,
            element: <MySchedulePage />
          },

          {
            path: ROUTE_PATHS.MY_SERVICES,
            element: <MyServicesPage />
          },

          {
            path: ROUTE_PATHS.SERVICES,
            element: <ServicesPage />
          },

          {
            path: ROUTE_PATHS.NOTIFICATIONS,
            element: <NotificationsPage />
          },

          {
            path: ROUTE_PATHS.PROFILE,
            element: <ProfilePage />
          },

          {
            path: ROUTE_PATHS.CHANGE_PASSWORD,
            element: <ChangePasswordPage />
          }
        ]
      },
      {
        element: <RoleRoute allowedRoles={['ADMIN']} />,
        children: [
          {
            element: <AppLayout />,
            children: [
              {
                path: ROUTE_PATHS.USERS,
                element: <UsersPage />
              },

              {
                path: ROUTE_PATHS.SETTINGS,
                element: <SettingsPage />
              }
            ]
          }]
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to={ROUTE_PATHS.DASHBOARD} replace />
  }
])


