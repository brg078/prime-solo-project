import React from 'react';

function ListItemQuestion(props) {
    const question = props.question;


    return (
        <>
            <td>{question.username}</td>
            <td>{question.question}</td>
            <td>{JSON.stringify(question.flagged)}</td>
            <td>{(question.flagged? 'Yes':'No')}</td>
        </>
    )
}

export default ListItemQuestion;