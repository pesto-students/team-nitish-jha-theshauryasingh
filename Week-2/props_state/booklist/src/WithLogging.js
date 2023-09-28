const WithLogging = function (WrappedComponent){
    return function WithLoggingComponent(){
        console.log("BookList component is rendered.")
        return <WrappedComponent/>;
    };
}

export default WithLogging