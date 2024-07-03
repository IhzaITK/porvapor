import express from "express";
import mysql from "mysql2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import axios from 'axios';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Update to the frontend URL
  credentials: true, // Enable credentials (cookies)
}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const db = mysql.createConnection({
  host: 'localhost',
  port: 8080,  // Ensure your MySQL port is correct
  user: 'root',
  password: 'root',
  database: 'ecommerce',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});


const handleAddToCart = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8888/api/cart",
      { product_id: id, quantity: 1 },  // Ensure you're sending valid product_id and quantity
      { withCredentials: true }
    );
    alert("Product added to cart successfully");
  } catch (err) {
    console.log("Error adding to cart:", err);
    alert("Failed to add product to cart");
  }
};


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json("No token provided!");

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) return res.status(500).json("Failed to authenticate token.");
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

app.get('/', (req, res) => {
  res.json('hello');
});

app.get('/products', (req, res) => {
  const q = 'SELECT * FROM products';
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const q = 'SELECT * FROM products WHERE id = ?';
  db.query(q, [productId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data[0]);
  });
});

app.post('/products', upload.single('image'), (req, res) => {
  const q = 'INSERT INTO products (`image`, `price`, `name`, `description`, `stock`, `category`) VALUES (?)';

  const values = [
    req.file ? `/uploads/${req.file.filename}` : null,
    req.body.price,
    req.body.name,
    req.body.description,
    req.body.stock,
    req.body.category,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/products/:id', upload.single('image'), (req, res) => {
  const productId = req.params.id;
  
  const updateFields = [];
  const values = [];
  
  if (req.file) {
    updateFields.push("image = ?");
    values.push(`/uploads/${req.file.filename}`);
  }
  if (req.body.price) {
    updateFields.push("price = ?");
    values.push(req.body.price);
  }
  if (req.body.name) {
    updateFields.push("name = ?");
    values.push(req.body.name);
  }
  if (req.body.description) {
    updateFields.push("description = ?");
    values.push(req.body.description);
  }
  if (req.body.stock) {
    updateFields.push("stock = ?");
    values.push(req.body.stock);
  }
  if (req.body.category) {
    updateFields.push("category = ?");
    values.push(req.body.category);
  }
  
  if (updateFields.length === 0) {
    return res.status(400).json({ message: "No fields to update" });
  }
  
  const q = `UPDATE products SET ${updateFields.join(', ')} WHERE id = ?`;
  values.push(productId);

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json({ message: "Error updating product", error: err });
    return res.status(200).json({ message: "Product updated successfully", data });
  });
});



app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  const q = 'DELETE FROM products WHERE id = ?';

  db.query(q, [productId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/register", async (req, res) => {
  const { username, password, email, date } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const q = "INSERT INTO users (`username`, `password`, `role`, `birth`, `email`) VALUES (?, ?, 'user', ?, ?)";
  db.query(q, [username, hashedPassword, date, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.status(200).json("User has been created.");
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [email], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const user = data[0];
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json("Wrong email or password!");

    const token = jwt.sign({ id: user.id, role: user.role }, "jwtSecretKey", { expiresIn: '1h' });
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({ message: "Login successful", token, role: user.role });
  });
});

app.get("/api/auth/me", verifyToken, (req, res) => {
  const q = "SELECT * FROM users WHERE id = ?";
  db.query(q, [req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    const user = data[0];
    res.status(200).json({ id: user.id, username: user.username, email: user.email, role: user.role });
  });
});

app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("access_token").status(200).json({ message: "Logout successful" });
});

app.listen(8888, () => {
  console.log("Connected to backend.");
});


// Add these routes to your backend.jsx

// Get user details
app.get("/api/account", verifyToken, (req, res) => {
  const q = "SELECT username, email, birth, address, phone FROM users WHERE id = ?";
  db.query(q, [req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    return res.json(data[0]);
  });
});

// Update user details
// Fetch user data
app.get("/api/account", verifyToken, (req, res) => {
  const q = "SELECT id, username, email, birth, address, phone FROM users WHERE id = ?";
  db.query(q, [req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    return res.json(data[0]);
  });
});

// Update user data
app.put("/api/account", verifyToken, (req, res) => {
  const { username, email, birth, address, phone } = req.body;
  const q = "UPDATE users SET username = ?, email = ?, birth = ?, address = ?, phone = ? WHERE id = ?";
  db.query(q, [username, email, birth, address, phone, req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User updated successfully");
  });
});


// Get user orders
app.get("/api/orders", verifyToken, (req, res) => {
  const q = `
    SELECT 
      o.id, 
      o.total, 
      o.created_at, 
      p.name, 
      oi.quantity, 
      oi.price, 
      p.image 
    FROM 
      orders o 
      JOIN order_items oi ON o.id = oi.order_id 
      JOIN products p ON oi.product_id = p.id 
    WHERE 
      o.user_id = ?
  `;
  db.query(q, [req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data.length ? data : []);
  });
});


// Add item to cart
app.post("/api/cart", verifyToken, (req, res) => {
  const { product_id, quantity } = req.body;
  const userId = req.userId;

  // Check if the item is already in the cart
  const checkCartQuery = "SELECT * FROM cart WHERE user_id = ? AND product_id = ?";
  db.query(checkCartQuery, [userId, product_id], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) {
      // If the item is already in the cart, update the quantity
      const updateCartQuery = "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?";
      db.query(updateCartQuery, [quantity, userId, product_id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Cart updated successfully");
      });
    } else {
      // If the item is not in the cart, insert a new row
      const insertCartQuery = "INSERT INTO cart (`user_id`, `product_id`, `quantity`) VALUES (?, ?, ?)";
      db.query(insertCartQuery, [userId, product_id, quantity], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Item added to cart successfully");
      });
    }
  });
});


app.get('/api/products', (req, res) => {
  const { searchTerm, category } = req.query;
  let q = 'SELECT * FROM products WHERE 1=1';

  if (searchTerm) {
    q += ` AND name LIKE ?`;
  }

  if (category) {
    q += ` AND category = ?`;
  }

  const queryParams = [];

  if (searchTerm) {
    queryParams.push(`%${searchTerm}%`);
  }

  if (category) {
    queryParams.push(category);
  }

  db.query(q, queryParams, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
});

// Route to get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.json(results);
  });
});

// Route to delete a user
app.delete('/users/:id', (req, res) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.json(results);
  });
});

// Fetch user data
app.get("/api/account", verifyToken, (req, res) => {
  const q = "SELECT id, username, email, birth, address, phone FROM users WHERE id = ?";
  db.query(q, [req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    return res.json(data[0]);
  });
});

// Update user data
app.put("/api/account", verifyToken, async (req, res) => {
  const { username, email, password, birth, address, phone, role } = req.body;
  let hashedPassword = password;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }
  const q = "UPDATE users SET username = ?, email = ?, password = ?, birth = ?, address = ?, phone = ?, role = ? WHERE id = ?";
  db.query(q, [username, email, hashedPassword, birth, address, phone, role, req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User updated successfully");
  });
});

// Fetch user data
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const q = "SELECT id, username, email, password, role, address, phone FROM users WHERE id = ?";
  db.query(q, [userId], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    if (data.length === 0) return res.status(404).json("User not found!");
    return res.json(data[0]);
  });
});

// Update user data
app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const { username, email, password, role, address, phone } = req.body;

  if (!username || !email || !role || !address || !phone) {
    return res.status(400).json({ error: "All fields except password are required." });
  }

  let hashedPassword = null;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const updateFields = [];
  const values = [];

  if (username) {
    updateFields.push("username = ?");
    values.push(username);
  }
  if (email) {
    updateFields.push("email = ?");
    values.push(email);
  }
  if (hashedPassword) {
    updateFields.push("password = ?");
    values.push(hashedPassword);
  }
  if (role) {
    updateFields.push("role = ?");
    values.push(role);
  }
  if (address) {
    updateFields.push("address = ?");
    values.push(address);
  }
  if (phone) {
    updateFields.push("phone = ?");
    values.push(phone);
  }

  if (updateFields.length === 0) {
    return res.status(400).json({ error: "No fields to update." });
  }

  const q = `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`;
  values.push(userId);

  db.query(q, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error", details: err });
    }
    return res.status(200).json({ message: "User updated successfully" });
  });
});

// Add this route in your backend (index.js)

// Fetch 3 random products
app.get('/products/random', (req, res) => {
  const q = 'SELECT * FROM products ORDER BY RAND() LIMIT 3';
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});
