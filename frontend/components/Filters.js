const Filters = ({ setFilters }) => {
    const handleChange = (e) => {
      setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    return (
      <div className="flex gap-4 mb-4">
        <select name="gender" onChange={handleChange} className="border p-2">
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" name="experience" placeholder="Min. Experience" onChange={handleChange} className="border p-2" />
      </div>
    );
  };
  export default Filters;
  