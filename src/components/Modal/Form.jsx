import './Form.css';

function Form({title, children}) {
    return (
        <div className="form">
            <h1 className="form-title">{title}</h1>
            {children}
        </div>
    );
}

export default Form;