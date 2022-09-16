import { GlobalStyle } from '../GlobalStyle';
import PhoneBookSection from './Phonebook/Phonebook';
import { PhoneBoockSection } from './Phonebook/Phonebook.styled';

export const App = () => {
  return (
    <PhoneBoockSection>
      <GlobalStyle />
      <PhoneBookSection />
    </PhoneBoockSection>
  );
};
