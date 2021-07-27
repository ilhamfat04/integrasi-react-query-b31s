## Fetching data with react query

- Fetching product data

  > File product for customer : `client/src/pages/Product.js`

  > File product for admin : `client/src/pages/ProductAdmin.js`

  Import useQuery :

  ```javascript
  import { useQuery } from "react-query";
  ```

  API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Fetching product data from database :

  ```javascript
  let { data: products, refetch } = useQuery("productsCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/products", config);
    return response.data;
  });
  ```

* Fetching detail product data

  > File : `client/src/pages/DetailProduct.js`

* Fetching profile data

  > File : `client/src/pages/Profile.js`

* Fetching transaction data

  > File : `client/src/pages/Profile.js`

* Fetching category data

  > File : `client/src/pages/CategoryAdmin.js`

* Insert transaction (buy)

  **This step after fetching product detail data**

  > File : `client/src/pages/DetailProduct.js`

  Import useQuery and useMutation :

  ```javascript
  import { useQuery, useMutation } from "react-query";
  ```

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Handle submit data :

  ```javascript
  const handleBuy = useMutation(async () => {
    try {
      // Get data from product
      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      console.log(data);

      // Data body
      const body = JSON.stringify(data);

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Insert transaction data
      await api.post("/transaction", config);

      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  });
  ```

  On CLick buy :

  ```html
  <button onClick={() => handleBuy.mutate()} className="btn btn-buy">
    Buy
  </button>
  ```
