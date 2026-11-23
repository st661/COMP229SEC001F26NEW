function handleError(req, res) {
    // YOur code to handle the error
}

function getErrorMessage(errMsg) {
    console.log(errMsg);
}

// Export the controller function
export default {
    handleError: handleError,
    getErrorMessage: getErrorMessage
};