import { Col, Row, Input, Button, Select, Tag, Avatar, List } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemainingSelector);
  const dispatch = useDispatch();

  // const handleAddButtonClick = () => {
  //   dispatch(
  //     addTodo({
  //       id: uuidv4(),
  //       name: todoName,
  //       priority: priority,
  //       completed: false,
  //     })
  //   );

  //   setTodoName("");
  //   setPriority("Medium");
  // };

  // const handleInputChange = (e) => {
  //   console.log("handleInputChange", e.target.value);
  //   setTodoName(e.target.value);
  // };

  // const handlePriorityChange = (value) => {
  //   setPriority(value);
  // };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      {/* <Col span={24}>
    //     <Input.Group style={{ display: "flex" }} compact>
    //       <Input value={todoName} onChange={handleInputChange} />
    //       <Select
    //         defaultValue="Medium"
    //         value={priority}
    //         onChange={handlePriorityChange}>
    //         <Select.Option value="High" label="High">
    //           <Tag color="red">High</Tag>
    //         </Select.Option>
    //         <Select.Option value="Medium" label="Medium">
    //           <Tag color="blue">Medium</Tag>
    //         </Select.Option>
    //         <Select.Option value="Low" label="Low">
    //           <Tag color="gray">Low</Tag>
    //         </Select.Option>
    //       </Select>
    //       <Button type="primary" onClick={handleAddButtonClick}>
    //         Add
    //       </Button>
    //     </Input.Group>
    //   </Col> */}

      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
    </Row>
    // <List
    //   itemLayout="horizontal"
    //   dataSource={data}
    //   renderItem={(item) => (
    //     <List.Item>
    //       <List.Item.Meta
    //         avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    //         title={<a href="https://ant.design">{item.title}</a>}
    //         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    //       />
    //     </List.Item>
    //   )}
    // />
  );
}
