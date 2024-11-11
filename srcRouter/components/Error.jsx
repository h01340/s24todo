// Error.jsx
import { useRouteError } from "react-router-dom";

export default function Error() {

    /**
     * Hook useRouteError can be used in an errorElement. 
     * It returns the error that was thrown.
     */
    const error = useRouteError();
    console.log(error);   // check the console to see the full contents of the error object

    return (
        <div>
            <h1>Page not found</h1>
            <p>{error.data}</p>
        </div>
    );
}