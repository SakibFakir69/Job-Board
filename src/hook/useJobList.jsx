import axios from "axios";
import React, { useEffect, useState } from "react";

function useJobList() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const getJobList = async () => {
      try {
        const res = await axios.get(
          "https://api.mnimedu.com/api/browse/pro-jobs/"
        );
        setJobList(res.data?.data);
        console.log(res.data)
      } catch (error) {
        console.log(error.message , error.code, error);
      }
    };
    getJobList();
  }, []);

  console.log(jobList , "job");

  return { jobList };
}

export default useJobList;
