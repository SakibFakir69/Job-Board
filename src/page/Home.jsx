import React, { useEffect } from "react";
import useJobList from "../hook/useJobList";
import axios from "axios";

import joblist from "../json/Job.json";
import Card from "../Shared/Card";
function Home() {
  // const {jobList} = useJobList(); has been blocked by CORS
  console.log(joblist);

  const listofJob = joblist.data || [];
  console.log(listofJob);

  useEffect(()=>{
   async function Data (){
        const res = await axios.get("/api/browse/pro-jobs/");
        console.log(res,'asd')

    }
    Data();
  })

  return (
    <div>
      {listofJob.map((post) => (
      <Card
        key={post.id}
        title={post.title}
        budgetType={post.budget_type}
        description={post.job_description}
        createdAt={post.created_at}
        capacity={post.hiring_capacity}
        duration={post.project_duration}
        rateFrom={post.rate_from}
        rateTo={post.rate_to}
   
        categoryTitle={post.category.title}
        subCategoryTitle={post.sub_category.title}
        jobTypeTitle={post.job_type.title}

        skills={post.skills}
        keywords={post.keywords}
      />
      ))
    }
    </div>
  );
}

export default Home;
