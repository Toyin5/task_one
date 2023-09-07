import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome! ");
});

app.get("/api?", (req, res) => {
  const { slack_name, track } = req.query;
  console.log(track);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  return res.status(200).json({
    status_code: "200",
    slack_name,
    track,
    current_day: days[date.getDay()],
    utc_time: date,
    github_file_url: "https://github.com/Toyin5/task_one/blob/main/index.js",
    github_repo_url: "https://github.com/Toyin5/task_one",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

export default app;
