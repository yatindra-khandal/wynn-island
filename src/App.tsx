import Footer from './components/Footer';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Registration from './components/Registration';
import { RegistrationProvider } from './context/RegistrationContext';

function App() {
  return (
    <RegistrationProvider>
      <div className="bg-[#f7f7f7] min-h-screen">
        <Header />
        <Registration />
        <NewsLetter />
        <Footer />
      </div>
    </RegistrationProvider>
  );
}

export default App;
