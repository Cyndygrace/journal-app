import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/journalApp')
  .then(() => {
    console.log('connected to mongodb...');
  })
  .catch(err => console.log('could not connect', err));

export default mongoose;
