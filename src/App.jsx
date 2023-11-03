import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './redux/config/modules/todo';


const App = () => {
  const todoStore = useSelector((state) => state.todo);
  // console.log(todoStore);

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 새 todo 추가 기능
  const addTodoHandler = () => {
    if (title === "" || contents === "") { // 빈값 유효성 검사
      return alert("빈칸에 내용을 입력하세요.");
    } else {
      const newTodo = {
        id: todoStore.length + 1,
        title: title,
        body: body,
        isDone: false,
      };
      dispatch(addTodo(newTodo));
      setTitle('');
      setBody('');
    };
  };

  return (
    <StContainer>
      <h1>TO DO 리스트</h1>
      <StInputBox>
        <form>
          <StInput
            name='title'
            placeholder='To do 제목'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <StInput
            name='contents'
            placeholder='To do 내용을 입력하세요'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
        <button onClick={addTodoHandler}>+</button>

      </StInputBox>
      <div>
        <h2>진행 중🔥</h2>
        {todoStore.filter((list) => !list.isDone).map((item) => {
          return (<StList key={item.id}>
            <p style={{ fontWeight: "bold" }}>{item.title}</p>
            <p>{item.body}</p>
            <button style={{ marginRight: "10px" }} onClick={() => { dispatch(deleteTodo(item.id)); }}>지우기</button>
            <button onClick={() => { dispatch(toggleTodo(item.id)); }}>완료</button>
          </StList>
          )
        })}
        <h2>완료🎉</h2>
        {todoStore.filter((list) => list.isDone).map((item) => {
          return (<StList key={item.id}>
            <p style={{ fontWeight: "bold" }}>{item.title}</p>
            <p>{item.body}</p>
            <button style={{ marginRight: "10px" }} onClick={() => { dispatch(deleteTodo(item.id)); }}>지우기</button>
            <button onClick={() => { dispatch(toggleTodo(item.id)); }}>취소</button>
          </StList>
          )
        })}
      </div>
    </StContainer>
  )
}

export default App;

const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  padding: 100px;
  margin-top: -250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StInputBox = styled.div`
  width: 100%;
  padding: 30px 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CDD5C6;
`
const StInput = styled.input`
  margin-right:20px;
  padding: 8px;
  border: none;
  border-radius: 6px;
`
const StList = styled.div`
  width: 500px;
  background-color: #FBF2ED;
  padding: 6px 26px 20px;
  margin-bottom:10px;
  text-align: left;
`;
