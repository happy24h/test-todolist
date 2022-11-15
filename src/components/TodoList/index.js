import { Col, Row } from "antd";
import Todo from "../Todo";
import { useSelector } from "react-redux";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const todoList = useSelector(todosRemainingSelector);

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
