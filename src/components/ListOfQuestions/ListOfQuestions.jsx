import { ListItem } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListItemQuestion from '../ListItemQuestion/ListItemQuestion';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ) {
//     return { name, calories, fat, carbs, protein };
// }


// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



function ListOfQuestions(){
    const history = useHistory();
    const dispatch = useDispatch();
    const questions = useSelector(store => store.questionList);
    //const usersList = useSelector(store => store.usersListReducer);

    useEffect(() => {
        getQuestions();
        userList();
    }, []);

    function userList(){
        dispatch({type: 'FETCH_USERS'});  
    }

    const getQuestions = () => {
        dispatch({type: 'FETCH_QUESTIONS'});
        console.log('dom side question store', questions);
    }

    const archiveQuestions = () => {
        console.log('in archiveQuestions!');
        dispatch({type: 'ARCHIVE_QUESTIONS'});
    }

    const returnToAskQuestions = () => {
        console.log('in returnToAskQuestions!');
        history.push('/questions');
    }

//: GridColDef[] am i going to need this?
    const columns = [
        {
        field: 'userName',
        headerName: 'User',
        width: 150,
        headerAlign: 'left'
        },
        {
        field: 'question',
        headerName: 'Question Asked',
        width: 250,
        editable: false,
        headerAlign: 'left'
        },
        {
        field: 'approval',
        headerName: 'Approval Status',
        width: 120,
        editable: true,
        headerAlign: 'center'
        },
        {
        field: 'flag',
        headerName: 'Flag Question',
        //type: 'number',
        width: 120,
        editable: true,
        headerAlign: 'center'
        },
        {
        field: 'approveButton',
        headerName: 'Approve Button',
        //type: 'number',
        width: 120,
        editable: true,
        headerAlign: 'center'
        },
        {
        field: 'flagButton',
        headerName: 'Flag Button',
        //type: 'number',
        width: 120,
        editable: true,
        headerAlign: 'center'
        },
        {
        field: 'deleteButton',
        headerName: 'Delete Button',
            //type: 'number',
        width: 120,
        editable: true,
        headerAlign: 'center'
        },

    ];

    //const rowData = questions.map(question => (<ListItemQuestion key={question.id} question ={question}/>))

    

    return (
        <div>
            <Box sx={{padding: '40px', width: '90%', justifyContent: 'center', margin: 'auto', display: 'flex' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Who Asked?</th>
                            <th>Who Submitted</th>
                            <th>Done</th>
                            <th>Approved?</th>
                            <th>Flagged?</th>
                            <th>Approve</th>
                            <th>Mark As Flagged</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <tr key={question.id}>
                                <ListItemQuestion key={question.id} question ={question}/>
                            </tr>
                        ))}
                    </tbody>    
                </table>
            </Box>

            {/* <Box sx={{ height: 400, width: '90%', justifyContent: 'center', margin: 'auto', display: 'flex' }}>
                <DataGrid
                    rows={questions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    //checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box> */}

            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}













            <Box sx={{padding: '40px', width: '90%', justifyContent: 'center', margin: 'auto', display: 'flex' }}>
                <button onClick={getQuestions}>Refresh Questions List</button>
                <button onClick={returnToAskQuestions}>Add Questions</button>
                <button onClick={archiveQuestions}>End Session</button>
            </Box>


            {/* <p>{JSON.stringify(usersList)}</p> */}
        </div>
    )
}

export default ListOfQuestions;