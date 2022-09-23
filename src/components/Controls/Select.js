import '../Controls/Select.css';

export default function Select({ options, changeHandler, setSearch }) {
  return (
    <div className='select'>SELECT TYPE
      <select className='selector' onChange={(e) => {
        setSearch('');
        changeHandler(e.target.value);
      }}>
        <option value="all"> ALL </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}