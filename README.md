# React Query

React query is a collection of hooks for fetching, caching, and updating asynchronous state in React.

For more info about react-query please refer to this [link](https://react-query.tanstack.com/docs/overview)

- Install react-query package (Client side) :

  ```
  npm i react-query
  ```

* Create API config in client side `client/src/config/api.js` :

  ```javascript
  export const API = () => {
    const baseUrl = "http://localhost:5000/api/v1/";

    const executeAPI = async (endpoint, config) => {
      const response = await fetch(baseUrl + endpoint, config);
      const data = await response.json();
      return data;
    };

    return {
      get: executeAPI,
      post: executeAPI,
      patch: executeAPI,
      delete: executeAPI,
    };
  };
  ```

* Init QueryCLient and QueryClientProvider `client/src/index.js`

  Import QueryClient and QueryClientProvider :

  ```javascript
  import { QueryClient, QueryClientProvider } from "react-query";
  ```

  Init Client :

  ```javascript
  const client = new QueryClient();

  ReactDOM.render(
    <React.StrictMode>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </UserContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
  ```

## Insert data with react query

- Insert data to register account

  > File : `client/src/components/auth/Register.js`

  Import `useMutation` from react-query :

  ```javascript
  import { useMutation } from "react-query";
  ```

  Get API config :

  ```javascript
  import { API } from "../../config/api";
  ```

  Store data with useState:

  ```javascript
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  ```

  Insert data process :

  ```javascript
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Configuration Content-type
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      // Insert data user to database
      const response = await api.post("/register", config);

      // Notification
      if (response.status == "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });
  ```

- Insert data for login process

  > File : `client/src/components/auth/Login.js`

- Insert category data

  > File : `client/src/pages/AddProductAdmin.js`

- Insert product data

  > File : `client/src/pages/AddProductAdmin.js`
