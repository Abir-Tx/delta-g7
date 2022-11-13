import React from "react";
import "../../assets/styles/css/lab.min.css";
import { motion } from "framer-motion";
import LabCard from "../../components/labCard";
import { useEffect, useState } from "react";
import backupDetails from "../../assets/data/details.json";
import Gallery from "../../components/gallery";

export default function Lab(props) {
  const [details, setTest] = useState(backupDetails);
  useEffect(() => {
    fetch("https://jsonblob.com/api/jsonBlob/1026725589796798464")
      .then((response) => response.json())
      .then((data) => setTest(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Destructure
  const lab1 = details["lab"][0]["lab1"][0];
  const lab2 = details["lab"][1]["lab2"][0];
  const lab3 = details["lab"][2]["lab3"][0];
  const lab4 = details["lab"][3]["lab4"][0];
  const lab5 = details["lab"][4]["lab5"][0];
  const lab6 = details["lab"][5]["lab6"][0];

  return (
    <motion.div
      className="lab-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className="title-con">
        <h2>Lab Activities</h2>
      </div>
      <div className="reports-con">
        <ul>
          <li>
            <h2>Lab Reports</h2>
          </li>
        </ul>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
          <LabCard
            title={lab1.title}
            link={lab1.link}
            image={lab1.image}
            desc={lab1.desc}
          />

          <LabCard
            title={lab2.title}
            link={lab2.link}
            image={lab2.image}
            desc={lab2.desc}
          />

          <LabCard
            title={lab3.title}
            link={lab3.link}
            image={lab3.image}
            desc={lab3.desc}
          />

          <LabCard
            title={lab4.title}
            link={lab4.link}
            image={lab4.image}
            desc={lab4.desc}
          />

          <LabCard
            title={lab5.title}
            link={lab5.link}
            image={lab5.image}
            desc={lab5.desc}
          />

          <LabCard
            title={lab6.title}
            link={lab6.link}
            image={lab6.image}
            desc={lab6.desc}
          />
        </div>
      </div>

      <div className="labPhotos-con">
        <ul>
          <li>
            <h2>Lab Performances</h2>
          </li>
        </ul>

        <Gallery />
      </div>
    </motion.div>
  );
}
