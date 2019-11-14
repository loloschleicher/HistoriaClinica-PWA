var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import routes
const especialidadesRouter = require("./app/src/routes/especialidadesRouter");
const profesionalRouter = require("./app/src/routes/profesionalesRouter");
const loginRouter = require("./app/src/routes/loginRouter");
const turnosRouter = require("./app/src/routes/turnosRouter");
const userRouter = require("./app/src/routes/userRouter");
const drogaRouter = require("./app/src/routes/drogasRouter");
const pacienteRouter = require("./app/src/routes/pacienteRouter");

const historialRouter = require("./app/src/routes/historialRouter");


app.use("/api", especialidadesRouter);
app.use("/api", profesionalRouter);
app.use("/api", loginRouter);
app.use("/api", turnosRouter);
app.use("/api", userRouter);
app.use("/api", drogaRouter);
app.use("/api", pacienteRouter);
app.use("/api", historialRouter);



//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
