import { useState } from "react";
import TodoGrid from "./TodoGrid";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; // Import dayjs
import 'dayjs/locale/fi'; // Import Finnish locale

export default function Todos() {

    //const [newTodo, setNewTodo] = useState({ description: '', priority: '', date: '' });
    const [newTodo, setNewTodo] = useState({ description: '', priority: '', date: dayjs() });
    const [todos, setTodos] = useState([]);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(null); // State to track selected row

    const dateChanged = (date) => {
        setNewTodo({ ...newTodo, date });
    };
    const addTodo = () => {
        if (newTodo.description.trim()) {
            const formattedTodo = { ...newTodo, date: dayjs(newTodo.date).format('DD-MM-YYYY') };
            setTodos([...todos, formattedTodo]);
            setNewTodo({ description: '', priority: '', date: dayjs() });
        }
    };

    const deleteTodo = (index) => {
        if (selectedTodoIndex !== null) {
            const updatedTodos = todos.filter((_, i) => i !== selectedTodoIndex);
            setTodos(updatedTodos);
            setSelectedTodoIndex(null); // Reset selected index after deletion
        }
    };

    return (
        <div>
            <Stack
                mt={2}
                direction="row" // Arranges the children horizontally (row layout)
                spacing={2} // Adds space between the child components (2 units of spacing)
                justifyContent="center" // Centers the child components horizontally within the container
                alignItems="center" // Centers the child components vertically within the container
            >


                <TextField
                    type="text"
                    label="Description"
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                />

                <InputLabel >Priority</InputLabel>
                <Select
                    value={newTodo.priority}
                    label="Priority"
                    onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
                >
                    <MenuItem value={'Low'}>Low</MenuItem>
                    <MenuItem value={'Medium'}>Medium</MenuItem>
                    <MenuItem value={'High'}>High</MenuItem>
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
                    <DatePicker
                        label="Select Date"
                        value={newTodo.date}
                        onChange={dateChanged}

                    />
                </LocalizationProvider>
                <Button variant="contained" onClick={() => addTodo()}>Insert</Button>
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    disabled={selectedTodoIndex === null} // Disable button if no row is selected
                    onClick={() => deleteTodo()}>

                </Button>
            </Stack>
            <TodoGrid
                todos={todos}
                onRowSelected={(index) => setSelectedTodoIndex(index)} // Pass a callback to update selected index
            />

        </div>
    );
};
