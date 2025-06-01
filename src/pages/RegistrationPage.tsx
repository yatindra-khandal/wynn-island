import NewsLetter from '../components/NewsLetter';
import Registration from '../components/Registration';
import { RegistrationProvider } from '../context/RegistrationContext';

const RegistrationPage = () => {
  return (
    <RegistrationProvider>
      <Registration />
      <NewsLetter />
    </RegistrationProvider>
  );
};

export default RegistrationPage;
