// eslint-disable-next-line
import { motion } from "framer-motion";
import "../Css/WeddingEvents.css";

const eventGroups = [
  {
    date: "April 12",
    events: [
      {
        title: "Haldi & Mehendi",
        desc: "Let's get yellow, messy, and colorful 🌼",
        image: "/assets/mh1.jpg",
        time: "10:00 AM – 12:30 PM",
        place: "Home Lawn, Jaipur"
      }
    ]
  },
  {
    date: "April 13",
    events: [
      {
        title: "Ladies' Sangeet",
        desc: "Dance. Music. Masala. Enough said 💃",
        image: "/assets/sng.jpg",
        time: "6:30 PM onwards",
        place: "Golden Leaf Banquet, Jaipur"
      }
    ]
  },
  {
    date: "April 14 — Morning",
    events: [
      {
        title: "Chak Bhaat Ceremony",
        desc: "Traditions, laughter, and turmeric rice 🍚",
        image: "/assets/ch.jpg",
        time: "11:00 AM",
        place: "Ancestral House, Jaipur"
      }
    ]
  },
  {
    date: "April 14 — Evening",
    events: [
      {
        title: "Baraat & Wedding Dinner",
        desc: "Dhol, dancing, vows & a grand feast 🎉",
        image: "/assets/sh.jpg",
        time: "7:00 PM onwards",
        place: "Raj Mahal Palace, Jaipur"
      }
    ]
  }
];

export default function WeddingEvents() {
  return (
    <section className="wedding-section">
      <h2 className="wedding-heading">Our Wedding Celebrations</h2>
      <div className="event-section-grid">
        {eventGroups.map((group, idx) =>
          group.events.map((event, i) => (
            <motion.div
              className="wedding-card"
              key={`${idx}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={event.image} alt={event.title} className="card-img" />
              <div className="card-content">
                <h2 className="event-date">{group.date}</h2>
                <h4>{event.title}</h4>
                <p className="card-desc">{event.desc}</p>
                <p className="card-time">{event.time}</p>
                <p className="card-place">{event.place}</p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
