import React from "react";
import "../../assets/styles/css/lab.min.css";
import { motion } from "framer-motion";
import lab1Img from "../../assets/images/bg/circuit.png";
import LabCard from "../../components/labCard";
import { useEffect, useState } from "react";
import backupDetails from "../../assets/data/details.json";

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
  // const lab6 = details["lab"][5]["lab5"][0];

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
        </div>
      </div>
    </motion.div>
  );
}
