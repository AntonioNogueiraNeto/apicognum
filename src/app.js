const express = require('express');

const app = express();
const hellorouter = require('./routers/hellorouter');
const employeeRoutes = require('./routers/employeeRoutes');

const PORT = 3000;

app.use(express.json());
app.use('/', hellorouter);
app.use('/', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
