import './App.css';


function App() {
  return (
    <div>
      <Folder name= 'This PC'>
        <Folder name= '3D Objects' />
        <Folder name= 'Desktop' />

        <Folder name= 'Documents' >
          <File name= 'Adobe' />
          <File name= 'abc.pdf' />
          </Folder>

        <Folder name= 'Downloads' >
          <File name= 'Adobe' />
          <File name= 'abc.pdf' />
          </Folder>

        <Folder name= 'Music' />
        <Folder name= 'Pictures' />
        <Folder name= 'Videos' />
        <Folder name= 'OS(C:)' />
        <Folder name= 'New Volume (D:)' />
        </Folder>
      <Folder name='Applications' />
    </div>
  )
}


const Folder = (props) => {
  return <div className= 'main'>
    { props.name }
    <div className = 'children'>
      { props.children }
    </div>
  </div>
}

const File = (props) => {
  return <div>{ props.name }</div>
}
export default App;
