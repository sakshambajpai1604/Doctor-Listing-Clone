const DoctorCard = ({ doctor }) => (
    <div className="border p-4 rounded shadow">
      <img src={doctor.image} alt={doctor.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience}+ years experience</p>
    </div>
  );
  export default DoctorCard;
  