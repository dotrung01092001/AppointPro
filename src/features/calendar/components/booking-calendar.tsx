
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid' // Cần thêm cái này
import interactionPlugin from '@fullcalendar/interaction'
import '@/assets/styles/calendar.css'


export default function BookingCalendar() {
    // Dữ liệu mẫu để hiển thị giống trong ảnh
    const events = [
        {
            title: 'Haircut & Style',
            client: 'Chris Rhea',
            start: '2004-10-14T10:00:00',
            end: '2004-10-14T11:00:00',
            // Dùng biến CSS để ăn vào file CSS bên trên
            backgroundColor: '#E6FFFA',
            borderColor: '#38B2AC',
            extendedProps: { client: 'Chris Rhea' }
        },
        {
            title: 'Nail Coloring',
            start: '2004-10-15T11:30:00',
            end: '2004-10-15T12:30:00',
            backgroundColor: '#FAF5FF',
            borderColor: '#9F7AEA',
            extendedProps: { client: 'Phonix Baker' }
        }
    ];

    // Hàm render nội dung tùy chỉnh cho Event
    const renderEventContent = (eventInfo) => {
        return (
            <div className="custom-event-wrapper">
                <div className="event-main-title">{eventInfo.event.title}</div>
                <div className="event-client-name">{eventInfo.event.extendedProps.client}</div>
                <div className="event-time-tag">{eventInfo.timeText}</div>
            </div>
        );
    };

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                allDaySlot={false}
                displayEventTime={false} // Ẩn giờ mặc định thô kệch
                dayHeaderFormat={{ weekday: 'short', day: 'numeric', month: 'numeric', omitCommas: true }}
                events={events}
                eventContent={renderEventContent}
                slotLabelFormat={{ hour: 'numeric', minute: '2-digit', meridiem: 'short' }}
                slotEventOverlap={false}
            />
        </div>
    )
}