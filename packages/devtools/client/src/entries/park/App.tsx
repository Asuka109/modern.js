import '@/styles/global.css';
import { FC } from 'react';
import { Box } from 'styled-system/jsx';
import { Button } from '@/components/ui/button';

const App: FC = () => {
  return (
    <Box>
      <Button>Hello</Button>
    </Box>
  );
};

export default App;
