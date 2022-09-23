import '../Controls/Select.css';

export default function Select({ options, changeHandler }) {
  return (
    <div className='select'>
      <select className='selector' onChange={(e) => changeHandler(e.target.value)}>
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