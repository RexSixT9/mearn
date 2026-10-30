// API - Application Programming Interface
// Reuse functionality for API calls
// Share data between components
// Connect frontend and backend
// Standardize data format for communication

// Categories of API:
// 1. Open APIs - Exposed to the public
// 2. Internal APIs - Used within the organization
// 3. Partner APIs - Shared with specific business partners
// 4. Composite APIs - Combine multiple services or data sources into a single API

// REST vs RESTful APIs:
// REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless communication and standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. Proposed by Roy Fielding. Defines how clients and servers should communicate over HTTP.
// RESTful APIs are APIs that adhere to the principles of REST. They follow the constraints of REST architecture, such as statelessness, client-server separation, and resource-based URLs. RESTful APIs provide a standardized way for clients to interact with resources on a server using HTTP methods.

// Client can make requests to the server using HTTP methods, and the server responds with data in a standardized format (usually JSON or XML).

// HTTP methods are GET (retrieve data), POST (create new data), PUT (update existing data), DELETE (remove data), PATCH (partially update data), and OPTIONS (retrieve supported methods for a resource). HEAD (retrieve metadata for a resource). TRACE (perform a diagnostic trace of the request-response chain). HTTP Request contains a request line, headers, and a body.

// Server returns a response with a status code, headers, and a body. Status codes indicate the outcome of the request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error). Headers provide additional information about the response (e.g., content type, caching directives). The body contains the actual data being returned (e.g., JSON or XML).

// Synchronous vs Asynchronous APIs:
// Synchronous APIs: The client sends a request and waits for the server to respond before continuing. The client is blocked until the response is received. Example: A user submits a form and waits for the server to process it and return a response.
// Asynchronous APIs: The client sends a request and continues to operate without waiting for the server's response. The client can perform other tasks while waiting for the response. Example: A user submits a form and receives an immediate acknowledgment, but the actual processing happens in the background.

// Key Components of API Fetching:
// 1. Http Request
// 2. Async Nature
// 3. Response Handling
// 4. Error Handling
// 5. Data Processing and Rendering

// HTTP Request: To fetch data from an API, you need to send a http request to the api endpoint. Common Methods includes GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, TRACE. The request can include headers (e.g., authentication tokens, content type) and a body (for methods like POST and PUT).

// Async Nature: API calls are often asynchronous, meaning that the client can continue executing other code while waiting for the response. This is typically handled using promises or async/await syntax in JavaScript.

// Response Handling: Once the server process the request, it sends back a response. The Response ofteh includes data in structured format (e.g., JSON or XML). You need to process then using JavaScript.

// Error Handling: It's important to handle errors that may occur during the API call. This can include network errors, server errors, or invalid responses. 

// Using the fetch API