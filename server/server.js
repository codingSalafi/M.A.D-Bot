import express from 'express';
import cors from 'cors';
import madBotRouter from './routes';
if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const app = express();

const { PORT = 8080 } = process.env;

app.use(cors());

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());
app.use(madBotRouter);

//Not Found Error
app.use((req, res, next) => {
  const error = new Error('Looking....Not Found');
  error.status = 404;
  next(error);
});

// what 
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    errors: {
      message: error.message
    }
  });
});

app.listen(PORT, () => console.log(`I dey run on top port ${PORT}`));

export default app;