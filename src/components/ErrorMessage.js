function ErrorMessage (props)
{
    const message = props.errorCheck ? props.errorCheck.message : "";
    return (
        <>
            <p hidden={!props.errorCheck}>{message}</p>
        </>
    )
}
export default ErrorMessage;