import Footer from './components/Footer';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <main>Main Content</main>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
