import React, { useState } from "react";
import "./Calendar.css";

const typeColors = {
  class: "#22c55e",
  break: "#f59e0b",
  exam: "#ef4444",
  study: "#3b82f6",
  event: "#a855f7",
};

const mockEvents = [
  { id: 1, date: "2026-06-18", time: "08:00", title: "Mathematics", type: "class" },
  { id: 2, date: "2026-06-18", time: "09:00", title: "English", type: "class" },
  { id: 3, date: "2026-06-18", time: "10:15", title: "Break", type: "break" },
  { id: 4, date: "2026-06-18", time: "10:45", title: "Science Lab", type: "class" },
  { id: 5, date: "2026-06-18", time: "12:30", title: "Lunch", type: "break" },
  { id: 6, date: "2026-06-18", time: "13:15", title: "Geography", type: "class" },
  { id: 7, date: "2026-06-18", time: "14:30", title: "Study Session", type: "study" },
];

// 🧠 FULL SCHOOL DAY STRUCTURE (IMPORTANT)
const dayStructure = [
  "08:00",
  "09:00",
  "10:00",
  "10:15",
  "11:00",
  "12:00",
  "12:30",
  "13:00",
  "13:15",
  "14:00",
  "14:30",
  "15:00",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getWeek = (baseDate) => {
  const date = new Date(baseDate);
  const day = date.getDay();
  const mondayOffset = date.getDate() - day + 1;

  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(date);
    d.setDate(mondayOffset + i);

    return {
      label: daysOfWeek[d.getDay()],
      date: d.toISOString().split("T")[0],
    };
  });
};

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("2026-06-18");

  const week = getWeek(selectedDate);

  const eventsByTime = mockEvents
    .filter((e) => e.date === selectedDate)
    .reduce((acc, e) => {
      acc[e.time] = e;
      return acc;
    }, {});

  return (
    <div className="calendar-page">

      {/* HEADER */}
      <div className="calendar-header">
        <div>
          <h1 className="page-title">Calendar</h1>
          <p className="subtitle">Full structured school day (not event list)</p>
        </div>

        <div className="chip">{selectedDate}</div>
      </div>

      {/* WEEK STRIP */}
      <div className="week-grid">
        {week.map((day) => (
          <div
            key={day.date}
            className={`week-card ${selectedDate === day.date ? "active" : ""}`}
            onClick={() => setSelectedDate(day.date)}
          >
            <div className="day-name">{day.label}</div>
            <div className="day-date">{day.date.slice(5)}</div>
          </div>
        ))}
      </div>

      {/* FULL DAY TIMELINE */}
      <div className="day-panel">

        <h2 className="section-title">
          Full Day Schedule
        </h2>

        {dayStructure.map((time) => {
          const event = eventsByTime[time];

          return (
            <div key={time} className="timeline-item">

              <div className="time">{time}</div>

              <div
                className="dot"
                style={{
                  background: event
                    ? typeColors[event.type]
                    : "#d1d5db",
                }}
              />

              <div>
                {event ? (
                  <>
                    <div className="title">{event.title}</div>
                    <div className="type">{event.type}</div>
                  </>
                ) : (
                  <div className="empty-slot">Free / Study Slot</div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Calendar;