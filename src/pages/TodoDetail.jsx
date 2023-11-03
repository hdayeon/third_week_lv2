import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const TodoDetail = () => {
  const { id } = useParams();
  const todoStore = useSelector((state) => state.todo);
  let todo = todoStore.find((item) => item.id === id);

  return (
    <div>
      <StDetailBox>
        <div style={{ width: "410px" }}>
          <span>ID : {todo.id}</span>
          <hr />
          <StDetailContents>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </StDetailContents>
          <Link to="/">&lt; 이전으로</Link>
        </div>
      </StDetailBox>
    </div>
  )
}

export default TodoDetail;

const StDetailBox = styled.div`
  width: 420px;
  height: 250px;
  padding: 30px;
  border: 2px solid #D9CEAD;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-200px;
  margin-top:-200px;
`

const StDetailContents = styled.div`
  margin: 10px 0;
  padding: 20px 0;
`