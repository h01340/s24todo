import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from './Home';
import Todos from './Todos';

export default function MyTabs() {
    const [value, setValue] = useState("home");

    const handleChange = (_, value) => {
        setValue(value);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="home" label="Home" />
                <Tab value="todos" label="Todos" />
            </Tabs>

            {/* Consistent styling for both tab contents */}
            {value === 'home' && (

                <Home />

            )}

            {value === 'todos' && (

                <Todos />

            )}
        </div>
    );
}