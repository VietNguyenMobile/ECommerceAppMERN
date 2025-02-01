# ECommerceAppMERN Backend

## Start

1. Create a `.env` file in the backend directory (see `.env.example` for required variables)

```env
PORT = 5000
MONGODB_PASSWORD = 12344Pass
MONGODB_URI = mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
# switch database name
DB_NAME = ecommerce

JWT_SECRET = 123456
JWT_SECRET_REFRESH = 123456789
```

```bash
yarn install

npm run dev
```

The server will start on `http://localhost:5000` by default.

### List API

```
POST   http://localhost:5000/api/auth/register
POST   http://localhost:5000/api/auth/login
POST   http://localhost:5000/api/auth/logout
GET    http://localhost:5000/api/auth/check-auth

POST   http://localhost:5000/api/admin/products/upload-image
POST   http://localhost:5000/api/admin/products/add
PUT    http://localhost:5000/api/admin/products/edit/:id
DELETE http://localhost:5000/api/admin/products/delete/:id
GET    http://localhost:5000/api/admin/products/get
```

### List API Product

```
GET    http://localhost:5000/api/products/get
GET    http://localhost:5000/api/products/get/:id
```
