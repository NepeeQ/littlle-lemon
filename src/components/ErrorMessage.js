function ErrorMessage (props)
{
    const message = props.errorCheck ? props.errorCheck.message : "";
    return (
        <>
            <p data-testid="error" hidden={!props.errorCheck}>{message}</p>
        </>
    )
}
export default ErrorMessage;