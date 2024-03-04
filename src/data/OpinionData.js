import { useEffect, useState } from "react";
import axios from "axios";

const OpinionData = () => {
  const [opinionData, setOpinionData] = useState(null);

  useEffect(() => {
    axios
      .get("https://blanccov.github.io/api-for-tests/opinionData.json")
      .then((response) => {
        setOpinionData(response.data);
      });
  }, []);

  return opinionData;
};

export default OpinionData;
