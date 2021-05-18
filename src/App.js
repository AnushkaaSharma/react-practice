import './App.css';

function App() {
  return (
    <div>
      <Folder name='Desktop'>
        <File name= 'dogs.jpg' />
      </Folder>
      <Folder name='Applications' />
    </div>
  )
  
}
const Folder = (props) => {
  return <div style={{ border: '2px solid black' }}>
    { props.name }
    <div>{ props.children }</div>
  </div>
    
}

const File = (props) => {
  return <div>{ props.name }</div>
}

export default App;
