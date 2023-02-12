import React, {useEffect, useState} from 'react'
import {User} from "../models/User";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent, Typography,
    useTheme
} from "@mui/material";
import {tokens} from "../theme";
import {Post} from "../models/Post";
import {fetchData} from "../utils/actions";
import {PostComments} from "../models/PostComments";
import UserPostsList from "./UserPostsList";
import PostCommentsList from "./PostComments";
import Tasks from "./Tasks";
import {Task} from "../models/Task";
import Range from "./Range";
import {getMostUsedWords, getOccurrences, OccurrenceClass} from "../utils/occurrences";


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
    const [comments, setComments] = useState<Comment[]>([])
    const [postComments, setPostComments] = useState<PostComments[]>([])
    const [tasks, setTasks] = useState<Task[]>([]);
    const [seeRanges, setSeeRanges] = useState(false)
    const [mostUsedWords, setMostUsedWords] = useState<[string, number][]>([])

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users')
            .then((json: []) => {
                return json.map((jsonUser: any) => {
                    const {id, name, username} = jsonUser;
                    const {geo} = jsonUser.address;
                    const user: User = {id, name, username, geo};
                    return user
                })
            })
            .then(users => setUsers(users));
        if(user && user.name) {
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
                                setPostComments(prevState => [{postId: post.id, numberOfComments: comments.length}, ...prevState]);
                            })
                    ))
                })
                .then(() => {
                    fetchData(`https://jsonplaceholder.typicode.com/users/${Number(user.id)}/todos`)
                        .then((tasks: Task[]) => setTasks(tasks))
                })
        }
    }, [user, ])

    const handleChange = (event: SelectChangeEvent) => {
        const user = users.find(user => user.id === Number(event.target.value));
        if(user !== undefined) setUser(user);
    };

    return(
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor={colors.primary["400"]} m={'20px'} p={'20px'}>
            <Box>
                <FormControl variant={'standard'} sx={{m: 1, minWidth: 120, width: 200}}>
                    <InputLabel sx={{color: colors.grey["100"]}}>User</InputLabel>
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
                <Box className={'userPostsList'}>
                    {posts.length > 0 && <UserPostsList posts={posts}/>}
                </Box>
                <Box className={'commentsPerPost'}>
                    <PostCommentsList data={postComments}  />
                </Box>

                <Box>
                    {tasks.length > 0 && <Tasks tasks={tasks}/>}
                </Box>

                <Box>

                </Box>

                <Box>
                    <Button sx={{color: colors.redAccent['200'], bgcolor: colors.redAccent["800"]}} variant={'outlined'} onClick={() => setSeeRanges(prevState => !prevState)}>
                        See ranges
                    </Button>
                    {seeRanges && <Range user={user} others={users.filter(other => user.id !== other.id)}/>}
                </Box>

                {mostUsedWords.length > 0 && <Box>
                    <Typography>Les 10 mots les plus utilisés !!!</Typography>
                    <ol>
                        {
                            mostUsedWords.map(word => (
                                <li key={word[0]}>
                                    {word[0]}: {word[1]}
                                </li>
                            ))
                        }
                    </ol>
                </Box>}
            </Box>
        </Box>
    )
}

export default BonusProject;