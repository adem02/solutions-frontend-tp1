import React from 'react'
import {Box, Typography} from "@mui/material";
import {Task} from "../models/Task";

type Props = {
    tasks: Task[]
}

const Tasks: React.FC<Props> = (props) => {
    return (
        <Box>
            <Typography variant={'h2'}>User's Todos</Typography>
            {
                props.tasks.map((task: Task) => (
                    <div key={task.id}>
                        <p>Task: {task.title}</p>
                        <p>Completed ? {`${task.completed}`}</p>
                    </div>
                ))
            }
        </Box>
    );
}

export default Tasks;