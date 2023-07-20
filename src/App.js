import Details from './Details';

function App() {

  let person = [{
    name:'yadhu',
    email:'yadhu@gmail.com'
  },
  {
    name:'anisa',
    email:'anisa@gmail.com'
  },
  {
    name:'taj',
    email:'taj@gmail.com'
  }]

  return (
    <div className='container'>
      {
      person.map((person)=>{
        return <Details {...person}/>
      })
     
      }
    </div>
  );
  }

export default App;
