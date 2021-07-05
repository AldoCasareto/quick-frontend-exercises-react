import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import axios from 'axios';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get(url);
    setJobs(res.data);
    setLoading(false);
    console.log(res.data);
  };

  console.log(jobs[companies]);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { title, duties, company, dates } = jobs[companies];

  return (
    <section className='section'>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => (
            <button
              className={`job-btn ${
                index === companies && 'active-btn'
              } key={job.id}`}
              onClick={() => setCompanies(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App;
