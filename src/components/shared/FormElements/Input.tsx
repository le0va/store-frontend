import './Input.css';

interface InputProps {
    element: string,
    id: string,
    type?: string,
    placeholder?: string,
    rows?: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    value: string,
    label: string
}

function Input(props: InputProps) {
    const element =
        props.element === 'input' ?
            <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} /> :
            <textarea id={props.id} rows={props.rows || 3} onChange={props.onChange} value={props.value} />;

    return (
        <div className="form-control">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
}

export default Input;