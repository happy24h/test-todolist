import { Col, Row, Input, Button, Select, Tag, Avatar, List } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemainingSelector);
  const dispatch = useDispatch();

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
            description={todo.description}
          />
        ))}
      </Col>
    </Row>
  );
}
