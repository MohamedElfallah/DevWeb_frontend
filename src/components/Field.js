const Field = ({label, type, placeholder, value, eventHandling}) => {
    return (
        <div className='form-control'>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={eventHandling}
        />
      </div>   
    )
}

export default Field;