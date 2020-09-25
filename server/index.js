const express = require('express');
const ctrl = require('./controller/controller');


const app = express();

app.use(express.json());

//endpoints
app.get('/api/tryOutData',ctrl.displayTryOut);
app.get('/api/team',ctrl.displayTeam);
app.post('/api/team',ctrl.addToTeam);
app.delete('/api/tryOutData/:id',ctrl.cutPlayer);
app.put('/api/team/:id', ctrl.editPlayer);

app.listen(6969, () => console.log('Server is running on 6969'))