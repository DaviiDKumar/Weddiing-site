import "../Css/About.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DiamondIcon from '@mui/icons-material/Diamond';
import EventIcon from '@mui/icons-material/Event';
// eslint-disable-next-line
import { motion } from 'framer-motion';

function About() {

    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="About">

            <div className="about-left">
                <motion.div 
                    className="about-left-top"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    viewport={{ once: true }}
                >
                    <h2 className="about-title">Our StorY</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus excepturi aspernatur natus quibusdam nesciunt fuga at eaque, commodi vel labore aut ex, explicabo molestiae! Dolore amet aliquid beatae at nostrum ab, similique repellat qui, voluptatem cumque quia eveniet. Veniam, ipsam.
                    </p>
                </motion.div>

                <div className="about-left-bottom">
                    {[{
                        icon: <FavoriteIcon className="card-icon" />, 
                        title: "Our First Date", 
                        desc: "The beginning of forever. Our first step into a beautiful journey together."
                    }, {
                        icon: <DiamondIcon className="card-icon" />, 
                        title: "The Engagement", 
                        desc: "A promise made, sealed with love. The moment we said “Yes”."
                    }, {
                        icon: <EventIcon className="card-icon" />, 
                        title: "Wedding Plans", 
                        desc: "Every detail, thoughtfully planned. A day to cherish forever."
                    }].map((card, i) => (
                        <motion.div 
                            className="about-card" 
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            {card.icon}
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-desc">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div 
                className="about-right"
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img src="/Images/abt1.jpg" alt="image1" />
                <img src="/Images/abt2.jpg" alt="image2" />
               
            </motion.div>

        </section>
    );
}

export default About;
