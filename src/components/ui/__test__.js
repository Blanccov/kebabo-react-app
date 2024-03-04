import { useEffect, useState } from "react";
import axios from "axios";

function __test__() {
  const [opinionData, setOpinionData] = useState();

  useEffect(() => {
    axios
      .get("https://blanccov.github.io/api-for-tests/opinionData.json")
      .then((response) => {
        console.log(response.data);
        setOpinionData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(opinionData)

  return opinionData;
}

export default __test__;
