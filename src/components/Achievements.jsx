import { useState } from "react";
import "../css/achievements.css";
import Model from "./Model";
const achievementsData = [
  {
    title: "ServiceNow CSA",
    description: "Certified System Administrator",
    certificate: "/certificates/csa.png",
  },
  {
    title: "ServiceNow CAD",
    description: "Certified Application Developer",
    certificate: "/certificates/cad.png",
  },
  {
    title: "SmartBridge Internship",
    description: "ShopSmart project completion",
    certificate: "/certificates/SmartBridge.png",
  },
];

const Achievements = () => {
  const [open, setOpen] = useState(false);
  const [activeFile, setActiveFile] = useState(null);

  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">Achievements</h2>

      <div className="achievements-container">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button
              className="certificate-btn"
              onClick={() => {
                setActiveFile(item.certificate);
                setOpen(true);
              }}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      <Model isOpen={open} onClose={() => setOpen(false)} file={activeFile} />
    </section>
  );
};

export default Achievements;
