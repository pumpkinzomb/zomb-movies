import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import express from "express";
import path from "path";
import "@babel/polyfill";

const port = process.env.PORT || 5000;
const app = express();
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});
server.start(() => console.log("Graphql Server is Running."));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "./../client/build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
