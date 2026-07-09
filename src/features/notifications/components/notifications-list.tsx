import NotificationItem from "./notification-item";

// eslint-disable-next-line react-refresh/only-export-components
export const notificationsTableData = [
    {
        id: "notif-001",
        title: "New appointment booked",
        message: "Olivia Rhye booked Haircut & Style for Oct 18, 2024 10:00 AM",
        timeAgo: "2 min ago",
        isRead: false,
    },
    {
        id: "notif-002",
        title: "Payment received",
        message: "Payment of $75.00 received from Olivia Rhye",
        timeAgo: "10 min ago",
        isRead: false,
    },
    {
        id: "notif-003",
        title: "Appointment canceled",
        message: "Phoenix Baker canceled appointment Oct 18, 11:30 AM",
        timeAgo: "25 min ago",
        isRead: false,
    },
    {
        id: "notif-004",
        title: "New customer registered",
        message: "New customer Lana Steiner has registered",
        timeAgo: "1 hour ago",
        isRead: false,
    },
    // Dữ liệu bổ sung:
    {
        id: "notif-005",
        title: "Appointment completed",
        message: "Facial Treatment for Adli Lane has been marked as finished",
        timeAgo: "3 hours ago",
        isRead: true,
    },
    {
        id: "notif-006",
        title: "New Review",
        message: "Candice Wu left a 5-star review for your service",
        timeAgo: "5 hours ago",
        isRead: true,
    },
    {
        id: "notif-007",
        title: "Reminder",
        message: "Staff meeting scheduled at 5:00 PM today",
        timeAgo: "6 hours ago",
        isRead: true,
    },
    {
        id: "notif-008",
        title: "Low stock alert",
        message: "Shampoo professional grade is running low",
        timeAgo: "1 day ago",
        isRead: true,
    },
];

export default function NotificationsList() {
    return (
        <div>
            {notificationsTableData.map((noti) => (
                <NotificationItem title={noti.title} message={noti.message} timeAgo={noti.timeAgo} isRead={noti.isRead} key={noti.id} />
            ))}
        </div>
    )
}