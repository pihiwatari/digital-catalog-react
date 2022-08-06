const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/files/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + ".stl");
  },
});
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3003;

server.use(middlewares);

// POST REQUEST
server.use(jsonServer.bodyParser);
server.post("/3DModels/", upload.single("file"), (req, res, next) => {
  try {
    req.body.uploadedOn = new Date();
    req.body.modelURL = req.file.path;
  } catch (error) {
    res.json({ "Error:": error });
  }
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
