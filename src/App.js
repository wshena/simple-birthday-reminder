import React, {useState} from 'react';
import List from './list';
import data from './data';

function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={()=> {setpeople([])}}>clear all</button>
      </section>
    </main>
  )

}

export default App;
