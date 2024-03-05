import Banner from './Banner'
import NavBar from './NavBar'
import Content from './Content'

function App() {

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <Content></Content>
      </div>
    </div>
  )
}

export default App