import Head from 'next/head';
import Header from '@/components/Header';
import Filters from '@/components/Filters';
import DoctorCard from '@/components/DoctorCard';
import { useEffect, useState } from 'react';

const DestinationPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const fetchDoctors = async () => {
    const query = new URLSearchParams({ ...filters, page }).toString();
    const res = await fetch(`http://localhost:5000/api/list-doctor-with-filter?${query}`);
    const data = await res.json();
    setDoctors(data.doctors);
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters, page]);

  return (
    <>
      <Head>
        <title>Best General Physicians Online | Apollo 247</title>
        <meta name="description" content="Consult top General Physicians online on Apollo 247" />
        <link rel="canonical" href="https://www.apollo247.com/specialties/general-physician-internal-medicine" />
      </Head>

      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <Filters setFilters={setFilters} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {doctors.map(doc => (
            <DoctorCard key={doc._id} doctor={doc} />
          ))}
        </div>
      </main>
    </>
  );
};

export default DestinationPage;
