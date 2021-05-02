import { useEffect, useState } from 'react';
import Main from './routes';
import './styles/index.css';
import UpdateThemeForStyle from './utils/updateThemeForStyle';
import axios from 'axios';

const App = () => {
  const [themes, setThemes] = useState({});
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const res = await axios.get('/api/web/setting');
        const data = res?.data?.settings[0]?.theme;
        setThemes(data);
        const {
          bgPrimary,
          bgSecondary,
          primary,
          textAlternate,
          textPrimary,
          textSecondary,
          name
        } = data;
        console.log('cool', data);
        const createThemeOptions = {
          '--bg-primary': bgPrimary,
          '--bg-secondary': bgSecondary,
          '--primary': primary,
          '--text-alternate': textAlternate,
          '--text-primary': textPrimary,
          '--text-secondary': textSecondary,
          name: name
        };

        UpdateThemeForStyle(createThemeOptions);
      } catch (error) {}
    };
    fetchTheme();
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

export default App;
