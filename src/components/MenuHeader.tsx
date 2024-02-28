import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

interface MenuHeaderProps {
  setApi: React.Dispatch<React.SetStateAction<string>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ setApi, setStart, setEnd }) => {
  const [activeButton, setActiveButton] = useState<string>('');

 

  const handleChange = (inp: string) => {
    setActiveButton(inp);
    if (inp === 'New') setApi('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    else setApi('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
    setStart(0);
    setEnd(5);
  };

  return (
    <Box mt={2} pr={2} pl={2}>
      <Button
        style={{ backgroundColor: activeButton === 'New' ? '#FBC91B' : '#F2F2F2' , marginRight: '8px', padding: '6px 19px', borderRadius: '12px'}}
        onClick={() => handleChange('New')} 
        
      >
        <span className='menu-button button-font'>New</span>
      </Button>
      <Button
        style={{ backgroundColor: activeButton === 'Past' ? '#FBC91B' : '#F2F2F2', padding: '6px 19px', borderRadius: '12px' }}
        onClick={() => handleChange('Past')}
      >
        <span className='menu-button button-font'>Past</span>
      </Button>
    </Box>
  );
};

export default MenuHeader;
