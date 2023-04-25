const express = require('express');

const app = express();
app.use(express.json());

// data
const courses = [
  { id: 1, name: 'CS472 - Web Programming' },
  { id: 2, name: 'CS435 - Algorithm' },
  { id: 3, name: 'CS401 - MPP' },
];

// get-> /courses
app.get('/courses', (req, res) => {
  res.send(courses);
});

// post-> /courses
app.post('/courses', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(401).send('Name is required');
  }

  const newCourse = { id: courses.length + 1, name };
  courses.push(newCourse);

  res.send(newCourse);
});

// get-> courses/:id
app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).send('Course not found');
  }

  res.send(course);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
