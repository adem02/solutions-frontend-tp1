import React, { useEffect, useState } from 'react'
import { User } from "../models/User";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent, Typography,
    useTheme
} from "@mui/material";
import { tokens } from "../theme";
import { Post } from "../models/Post";
import { fetchData } from "../utils/actions";
import { PostComments } from "../models/PostComments";
import UserPostsList from "./UserPostsList";
import PostCommentsList from "./PostComments";
import Tasks from "./Tasks";
import { Task } from "../models/Task";
import Range from "./Range";
import { getMostUsedWords } from "../utils/occurrences";
import { ExpandMore } from "@mui/icons-material";
import MostUsedWords from './MostUsedWords';


const BonusProject = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        id: '',
        name: '',
        username: '',
        geo: {
            lat: '',
            lng: ''
        }
    });
    const [posts, setPosts] = useState<Post[]>([]);
    const [postComments, setPostComments] = useState<PostComments[]>([])
    const [tasks, setTasks] = useState<Task[]>([]);
    const [mostUsedWords, setMostUsedWords] = useState<[string, number][]>([])

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users')
            .then((json: []) => {
                return json.map((jsonUser: any) => {
                    const { id, name, username } = jsonUser;
                    const { geo } = jsonUser.address;
                    const user: User = { id, name, username, geo };
                    return user
                })
            })
            .then(users => setUsers(users));
        if (user && user.name) {
            setPostComments([])
            fetchData(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then((posts: Post[]) => {
                    setPosts(posts)
                    setMostUsedWords(getMostUsedWords(posts));
                    return posts
                })
                .then(async (posts) => {
                    await Promise.all(posts.map(post =>
                        fetchData(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                            .then((comments: []) => {
                                setPostComments(prevState => [{
                                    postId: post.id,
                                    numberOfComments: comments.length
                                }, ...prevState]);
                            })
                    ))
                })
                .then(() => {
                    fetchData(`https://jsonplaceholder.typicode.com/users/${Number(user.id)}/todos`)
                        .then((tasks: Task[]) => setTasks(tasks))
                })
        }
    }, [user,])

    const handleChange = (event: SelectChangeEvent) => {
        const user = users.find(user => user.id === Number(event.target.value));
        if (user !== undefined) setUser(user);
    };

    return (
        <Box display={'flex'} flexDirection={'column'} m={'20px'}>
            <Box alignSelf={'center'}>
                <FormControl variant={'standard'} sx={{ m: 1, minWidth: 120, width: 200 }}>
                    <InputLabel sx={{ color: colors.grey["100"] }}>User</InputLabel>
                    <Select
                        value={String(user.id)}
                        onChange={handleChange}
                        label="User"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            users.map(user => <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Box>

            <Box className={'userPostsList'} width={'100%'}>
                <Accordion expanded={posts.length > 0} sx={{ bgcolor: colors.primary[500] }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography color={colors.greenAccent[500]} variant={'h5'}>
                            User Posts List
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {posts.length > 0 && <UserPostsList posts={posts} />}
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box className={'commentsPerPost'}>
                <Accordion sx={{ bgcolor: colors.primary[500] }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant={'h5'} color={colors.greenAccent[500]}>
                            Users Posts Comments
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PostCommentsList data={postComments} />
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box>
                <Accordion sx={{ bgcolor: colors.primary[500] }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant={'h5'} color={colors.greenAccent[500]}>
                            User's Todos
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {tasks.length > 0 && <Tasks tasks={tasks} />}
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box>
                <Accordion sx={{ bgcolor: colors.primary[500] }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant={'h5'} color={colors.greenAccent[500]}>
                            Ranges between Users
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {user.name && <Range user={user} others={users.filter(other => user.id !== other.id)} />}
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box>
                <Accordion sx={{ bgcolor: colors.primary[500] }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant={'h5'} color={colors.greenAccent[500]}>
                            10 Most used words
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MostUsedWords mostUsedWords={mostUsedWords} />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

export default BonusProject;