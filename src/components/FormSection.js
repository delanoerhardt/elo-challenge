import "./FormSection.css";

function FormSection(props) {
  const styleElement = {
    maxWidth: props.maxWidth,
  };

  return (
    <div className="form-section" style={styleElement}>
      <label htmlFor={props.id}>{props.children}</label>
      <br />
      <input
        className="boxsizing-border form-input-text"
        id={props.id}
        type={props.type}
        style={styleElement}
        value={props.valueOfState}
        readOnly={props.readOnly}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default FormSection;
