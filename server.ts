import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";

import connectDatabase from "./config/db";

const schema = require("./schema/schema");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

connectDatabase();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`App is running on port: ${port}`));
