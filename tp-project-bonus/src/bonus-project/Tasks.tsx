import React from 'react';
import { Box } from "@mui/material";
import { Task } from "../models/Task";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

type Props = {
    tasks: Task[]
}

const Tasks: React.FC<Props> = (props) => {
    return (
        <Box>
            <List dense sx={{ width: '100%' }}>
                {props.tasks.map((task, index) => {
                    return (
                        <ListItem
                            key={task.id}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    checked={task.completed}
                                    color={'success'}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText id={String(task.id)} primary={task.title} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}

export default Tasks;