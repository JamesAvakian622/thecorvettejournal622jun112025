import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZ06 from "./Z06/CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./Z06/OnPageZ06";
import CarouselFlag from "./Z06/CarouselFlag";
import SidebarZ06 from "./Z06/SidebarZ06";
import SidebarZ06B from "./Z06/SidebarZ06B";
import NavbarMore from "./NavbarMore";

export default function Drive() {
  const sections = [
    {
      title: "Pacific Coast Highway (California): ",
      text: "  This iconic route, also known as California State Route 1, offers breathtaking coastal views and winding roads. From the rugged cliffs of Big Sur to the sunny beaches of Malibu, this drive lets you fully enjoy Corvette agility and power.",
    },
    {
      title: "Blue Ridge Parkway (Virginia and North Carolina): ",
      text: "  Stetching 469 miles through the Appalachian Mountains, this scenic drive combines serene landscapes with challenging curves. Make it a great way to test the Corvette handling while soaking in panoramic views.",
    },
    {
      title: "Route 66 (Illinois to California): ",
      text: "  Known as the Main Steet of America, this historic route spans over 2,400 miles. It offers long, open roads and nostalgic stops, making it a perfect journey for Corvette enthusiasts.",
    },
    {
      title: "Tail of the Dragon (North Carolina and Tennessee): ",
      text: "  This legendary Stetch of road features 318 curves in just 11 miles. It is s a thrilling challenge for any driver and a great way to experience your Corvette s precision.",
    },
    {
      title: "Beartooth Highway (Wyoming and Montana): ",
      text: "Near Yellowstone National Park, this route offers stunning mountain views and zigzagging paths that showcase the Corvette s performance capabilities.",
    },
    {
      title: "Ohio State Route 555 (The Triple Nickel): ",
      text: "  This 62-mile Stetch combines long Staights, sweeping curves, and tight corners, making it a fun and varied drive for Corvette lovers.",
    },
    {
      title: ">>>>>Affirmations>>>>>",
      text: " Food for the Soul, Keep on driving your great Corvette!",
    },

    {
      title: "Lets go for a drive:",
      text: "     Let's take the joy of driving a Corvette—a sleek, powerful machine—and align it with the principles of cultivating joy. Here's how:",
    },
    {
      title: "Thank GM and Chevrolet for making such a beautiful car:",
      text: "     1. Start with Gratitude: Before hitting the road, take a moment to appreciate owning or having access to such an iconic sports car. Reflect on the hard work or circumstances that led you to that moment.",
    },
    {
      title: "    Meditate on life, about where to drive:",
      text: " 2. Spend Time in Nature: A Corvette isn't just a car; it's a ticket to scenic drives. Whether it's cruising along the Pacific Coast Highway or winding through countryside roads, the connection to nature enhances the driving experience.",
    },
    {
      title: "Make driving your Corvette fun!:",
      text: " 3.practice Acts of Kindness: Wave to fellow drivers, let someone merge ahead of you, or offer a ride to a friend or family member. Sharing the experience of the Corvette spreads joy to others.",
    },
    {
      title: "Ah, the beauty is right here!:",
      text: " 4. Embrace Moments of Laughter: Feel the playful thrill of pressing the pedal a bit harder (safely, of course!) or laughing at the admiring glances from passersby.",
    },
    {
      title: "Drive to a friends house, Show off your Corvette!:",
      text: " 5. Connect with Loved Ones: Take a close friend, partner, or family member along for a ride. Sharing the experience of speed, style, and open road fosters connection.",
    },
    {
      title: "Yes, sir, lets put the car in gear and 'Find New Roads!':",
      text: " 6. Engage in Something Creative: Customize your Corvette or personalize your driving route to make it uniquely yours. Adding a touch of creativity can make the experience even more satisfying.",
    },
    {
      title: "Drive and look around you!:",
      text: " 7. Focus on the Present: Behind the wheel of a Corvette, it's all about the here and now—the hum of the engine, the curve of the road, the wind rushing past you. Being fully present enhances every moment.",
    },
    {
      title: "Make driving an experience!:",
      text: " 8. Take Care of Your Body: Driving a Corvette can be a demanding experience, especially on long trips. Stay hydrated, take breaks, and ensure you're physically comfortable to fully enjoy the ride.",
    },
    {
      title: "Buy a Lottery ticket!:",
      text: " 9. Celebrate Small Wins: Made it through a tricky Stetch of road? Nailed the perfect parking job? Celebrate those moments—it's all part of the journey!",
    },
    {
      title: "Drive and Love it, Daily!:",
      text: " 10. Seek Meaning in Challenges: Whether it's learning the ins and outs of handling your Corvette or facing unexpected road conditions, embrace the lessons these challenges teach. They deepen your appreciation for the car and the drive. ",
    },
    {
      title: "Write Us, Tell us about your car!",
      text: " Joy, much like a Corvette, requires care, attention, and a willingness to embrace the ride fully. Would you like me to craft some scenic road trip ideas for your Corvette? Let me know!",
    },
  ];
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          {/*   Adjust two Navbar 2 n 3 */}
          <div className="center1">
            <NavbarMore />

            <h1>
              <b> Places To Drive </b>
            </h1>
          </div>
          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
              Reference: 1. Hagerty, The LT6 A Landmark Achievement
            </Link>
            <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
              2. Vette Vues Magazine
            </Link>
            <Footer />
          </div>
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZ06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
