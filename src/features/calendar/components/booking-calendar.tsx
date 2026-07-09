import { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { DatesSetArg, DayHeaderContentArg, EventContentArg, EventDropArg } from '@fullcalendar/core'
import type { EventResizeDoneArg } from '@fullcalendar/interaction'
import { ChevronDown, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import '@/assets/styles/calendar.css'

type CalendarView = 'timeGridWeek' | 'timeGridDay' | 'dayGridMonth'

const initialDate = '2024-10-18'

const viewLabels: Record<CalendarView, string> = {
    timeGridWeek: 'Week',
    timeGridDay: 'Day',
    dayGridMonth: 'Month',
}

const appointments = [
    {
        id: '1',
        title: 'Haircut & Style',
        start: '2024-10-14T10:00:00',
        end: '2024-10-14T11:00:00',
        backgroundColor: '#DDF7F1',
        borderColor: '#61D3C6',
        extendedProps: { client: 'Chris Rhea' },
    },
    {
        id: '2',
        title: 'Nail Coloring',
        start: '2024-10-15T11:30:00',
        end: '2024-10-15T12:30:00',
        backgroundColor: '#EBDDFF',
        borderColor: '#9C5CFF',
        extendedProps: { client: 'Phonix Baker' },
    },
    {
        id: '3',
        title: 'Manicure',
        start: '2024-10-16T13:30:00',
        end: '2024-10-16T14:30:00',
        backgroundColor: '#E8D9FF',
        borderColor: '#B073FF',
        extendedProps: { client: 'Camille Ryl' },
    },
    {
        id: '4',
        title: 'Facial Treatment',
        start: '2024-10-18T10:30:00',
        end: '2024-10-18T11:30:00',
        backgroundColor: '#DEC8FF',
        borderColor: '#9B5DFF',
        extendedProps: { client: 'Lara Weaver' },
    },
    {
        id: '5',
        title: 'Massage',
        start: '2024-10-19T12:30:00',
        end: '2024-10-19T13:30:00',
        backgroundColor: '#DFF8F4',
        borderColor: '#61D3C6',
        extendedProps: { client: 'Diane Whitson' },
    },
    {
        id: '6',
        title: 'Haircut & Style',
        start: '2024-10-20T14:30:00',
        end: '2024-10-20T15:30:00',
        backgroundColor: '#E3EAFF',
        borderColor: '#7C96FF',
        extendedProps: { client: 'Alan Lane' },
    },
]

const monthTitleFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
})

const weekdayFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
})

const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
})

function formatMonthTitle(date: Date) {
    return monthTitleFormatter.format(date)
}

function formatEventTime(date: Date | null) {
    return date ? timeFormatter.format(date) : ''
}

export default function BookingCalendar() {
    const calendarRef = useRef<FullCalendar>(null)
    const [title, setTitle] = useState('October 2024')
    const [view, setView] = useState<CalendarView>('timeGridWeek')

    const [events, setEvents] = useState(appointments)

    const handleDatesSet = (dateInfo: DatesSetArg) => {
        setTitle(formatMonthTitle(dateInfo.view.currentStart))
        setView(dateInfo.view.type as CalendarView)
    }

    const moveCalendar = (direction: 'prev' | 'next' | 'today') => {
        const api = calendarRef.current?.getApi()

        if (direction === 'today') {
            api?.today()
            return
        }

        api?.[direction]()
    }

    const changeView = (nextView: CalendarView) => {
        calendarRef.current?.getApi().changeView(nextView)
    }

    const renderDayHeader = (dayInfo: DayHeaderContentArg) => {
        const isFeaturedDay = dayInfo.date.toISOString().startsWith(initialDate)

        return (
            <div className={`calendar-day-heading${isFeaturedDay ? ' is-featured' : ''}`}>
                <span>{weekdayFormatter.format(dayInfo.date)}</span>
                <strong>{dayInfo.date.getDate()}</strong>
            </div>
        )
    }

    const renderEventContent = (eventInfo: EventContentArg) => {
        const client = eventInfo.event.extendedProps.client as string

        return (
            <div className="custom-event-wrapper">
                <div className="event-main-title">{eventInfo.event.title}</div>
                <div className="event-client-name">{client}</div>
                <div className="event-time-tag">{formatEventTime(eventInfo.event.start)}</div>
            </div>
        )
    }

    const handleEventDrop = (dropInfo: EventDropArg) => {
        const movedEvent = dropInfo.event;
        const start = movedEvent.start?.toISOString();
        const end = movedEvent.end?.toISOString();

        if (!start || !end) {
            dropInfo.revert()
            return;
        }


        setEvents((currentEvents) =>
            currentEvents.map((event) =>
                event.id === movedEvent.id
                    ? {
                        ...event, start, end
                    } : event
            )
        )
    }

    const handleEventResize = (resizeInfo: EventResizeDoneArg) => {
        const resizedEvent = resizeInfo.event;

        const start = resizedEvent.start?.toISOString();
        const end = resizedEvent.end?.toISOString();

        if (!start || !end) {
            resizeInfo.revert()
            return;
        }

        setEvents((currentEvents) =>
            currentEvents.map((event) =>
                event.id === resizedEvent.id
                    ? {
                        ...event,
                        start,
                        end,
                    } : event
            )
        )
    }

    return (
        <section className="calendar-container" aria-label="Booking calendar">
            <div className="calendar-shell">
                <div className="calendar-toolbar">
                    <div className="calendar-toolbar-left">
                        <button className="calendar-button calendar-button-text" type="button" onClick={() => moveCalendar('today')}>
                            Today
                        </button>
                        <div className="calendar-nav-group" aria-label="Calendar navigation">
                            <button className="calendar-icon-button" type="button" onClick={() => moveCalendar('prev')} aria-label="Previous period">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="calendar-icon-button" type="button" onClick={() => moveCalendar('next')} aria-label="Next period">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                        <button className="calendar-month-button" type="button">
                            {title}
                            <ChevronDown size={15} />
                        </button>
                    </div>

                    <div className="calendar-toolbar-right">
                        <label className="calendar-view-select">
                            <span className="sr-only">Calendar view</span>
                            <select value={view} onChange={(event) => changeView(event.target.value as CalendarView)}>
                                {Object.entries(viewLabels).map(([value, label]) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={15} />
                        </label>
                        <button className="calendar-icon-button calendar-add-button" type="button" aria-label="Add appointment">
                            <Plus size={17} />
                        </button>
                    </div>
                </div>

                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    initialDate={initialDate}
                    headerToolbar={false}
                    allDaySlot={false}
                    weekends
                    firstDay={1}
                    height="auto"
                    expandRows
                    nowIndicator={false}
                    slotMinTime="09:00:00"
                    slotMaxTime="17:30:00"
                    slotDuration="00:30:00"
                    slotLabelInterval="01:00"
                    slotLabelFormat={{ hour: 'numeric', minute: '2-digit', meridiem: 'short' }}
                    dayHeaderContent={renderDayHeader}
                    events={events}
                    eventContent={renderEventContent}
                    eventTimeFormat={{ hour: 'numeric', minute: '2-digit', meridiem: 'short' }}
                    displayEventTime={false}
                    slotEventOverlap={false}
                    datesSet={handleDatesSet}
                    editable
                    eventStartEditable
                    eventDurationEditable
                    eventDrop={handleEventDrop}
                    eventResize={handleEventResize}
                />
            </div>
        </section>
    )
}
