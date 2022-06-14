import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  // <div className="App">
  //   <h1 className="text-4xl font-bold underline">
  //     Hi there !
  //   </h1>
  // </div>
);

export default App;