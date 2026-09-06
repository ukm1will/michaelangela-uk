const Message = (props) => {
    if (props.location.pathname === '/not-found')
        throw new Error("PageNotFound");
    else  {
        throw new Error('Unspecified error occurred. Please try again later.');
    }
}

export default Message;