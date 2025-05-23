export const handleZodError = ({ error,setState}:{error:any,setState:any}) => {
    const formattedErrors: Record<string, string> = {};
    error.issues.forEach((issue:any) => {
        const field = issue.path[0];
        if (typeof field === "string") {
            formattedErrors[field] = issue.message
        }
    });

    // Set the errors to state
    setState(formattedErrors);
}