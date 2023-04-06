
const Message = ({ children, kind}) => {
    return (
        <div className={`alerta ${kind}`}>
            {children}
        </div>
    );
}

export default Message;