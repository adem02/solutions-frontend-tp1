import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

type Props = {
    mostUsedWords: [string, number][]
}

const MostUsedWords: React.FC<Props> = (props) => {
    return (
        <div>
            {props.mostUsedWords.length > 0 && <Typography variant="h5" component="h2">
                Word Count
            </Typography>}
            <List>
                {props.mostUsedWords.map((word) => (
                    <ListItem key={word[0]}>
                        <ListItemText primary={word[0]} secondary={`Occurrences: ${word[1]}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default MostUsedWords