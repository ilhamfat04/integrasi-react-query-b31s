## Update data with react query

- Update product data

  > File : `client/src/pages/UpdateProductAdmin.js`

  Import useQuery and useMutation :

  ```javascript
  import { useQuery, useMutation } from "react-query";
  ```

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Store data on useState :

  ```javascript
  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [product, setProduct] = useState({}); //Store product data
  const [form, setForm] = useState({
    image: "",
    name: "",
    desc: "",
    price: "",
    qty: "",
  }); //Store product data
  ```

  Fetching product detail and categpry data :

  ```javascript
  // Fetching detail product data by id from database
  let { productRefetch } = useQuery("productCache", async () => {
    const config = {
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/product/" + id, config);
    setForm({
      name: response.data.name,
      desc: response.data.desc,
      price: response.data.price,
      qty: response.data.qty,
      image: response.data.image,
    });
    setProduct(response.data);
  });

  // Fetching category data
  let { categoriesRefetch } = useQuery("categoriesCache", async () => {
    const response = await api.get("/categories");
    setCategories(response.data);
  });
  ```

  Handle if category selected :

  ```javascript
  // For handle if category selected
  const handleChangeCategoryId = (e) => {
    const id = e.target.value;
    const checked = e.target.checked;

    if (checked == true) {
      // Save category id if checked
      setCategoryId([...categoryId, parseInt(id)]);
    } else {
      // Delete category id from variable if unchecked
      let newCategoryId = categoryId.filter((categoryIdItem) => {
        return categoryIdItem != id;
      });
      setCategoryId(newCategoryId);
    }
  };
  ```

  Handle change data on form

  ```javascript
  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      setPreview(e.target.files);
    }
  };
  ```

  Handle submit data :

  ```javascript
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Store data with FormData as object
      const formData = new FormData();
      if (preview) {
        formData.set("image", preview[0], preview[0]?.name);
      }
      formData.set("name", form.name);
      formData.set("desc", form.desc);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      formData.set("categoryId", categoryId);

      // Configuration
      const config = {
        method: "PATCH",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
        body: formData,
      };

      // Insert product data
      const response = await api.patch("/product/" + product.id, config);

      history.push("/product-admin");
    } catch (error) {
      console.log(error);
    }
  });
  ```

- Update category data

  > File : `client/src/pages/UpdateCategoryAdmin.js`

  Import useQuery and useMutation :

  ```javascript
  import { useQuery, useMutation } from "react-query";
  ```

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Use useState for store data :

  ```javascript
  const [category, setCategory] = useState({ name: "" });
  ```

  Fething category data by id :

  ```javascript
  // Fetching category data by id from database
  let { refetch } = useQuery("categoryCache", async () => {
    const response = await api.get("/category/" + id);
    setCategory({ name: response.data.name });
  });
  ```

  Handle submit data :

  ```javascript
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(category);

      // Configuration
      const config = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body,
      };

      // Insert category data
      const response = await api.patch("/category/" + id, config);

      history.push("/category-admin");
    } catch (error) {
      console.log(error);
    }
  });
  ```
