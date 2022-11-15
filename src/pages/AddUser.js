import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../redux/selectors";
import { TimePicker } from "antd";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function AddUser() {
  const [todoName, setTodoName] = useState({
    title: "",
    description: "",
  });
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: title,
        description: description,
        priority: priority,
        completed: false,
      })
    );

    setTodoName("");
    setPriority("Medium");
    navigate("/");
  };

  const handleInputChange = (e) => {
    console.log("handleInputChange", e.target.value);
    let { name, value } = e.target;
    setTodoName({ ...todoName, [name]: value });
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  let { title, description } = todoName;
  return (
    <div
      style={{
        width: 600,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}>
      <div style={{ width: 500, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>New Task</h2>
        <Row style={{ height: "calc(100% - 40px)" }}>
          <Col span={24}>
            <Input.Group
              style={{ display: "flex", flexDirection: "column" }}
              compact>
              <Input
                name="title"
                value={title}
                placeholder="Add new task"
                onChange={handleInputChange}
              />
              <div
                style={{
                  marginTop: 25,
                }}>
                <p>
                  <label>Description:</label>
                </p>
                <TextArea
                  name="description"
                  value={description}
                  rows={4}
                  placeholder="This is content ..."
                  minLength={1}
                  onChange={handleInputChange}
                />
              </div>
              <div
                style={{
                  margin: "25px 0 30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <div>
                  <p>
                    <label>Due date:</label>
                  </p>
                  <TimePicker
                    onChange={onChange}
                    defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                  />
                </div>
                <div>
                  <p>
                    <label>Priority:</label>
                  </p>
                  <Select
                    defaultValue="Medium"
                    value={priority}
                    onChange={handlePriorityChange}>
                    <Select.Option value="High" label="High">
                      <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                      <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                      <Tag color="gray">Low</Tag>
                    </Select.Option>
                  </Select>
                </div>
              </div>
              <Button type="primary" onClick={handleAddButtonClick}>
                Add Task
              </Button>
            </Input.Group>
          </Col>
          {/* <Col
          span={24}
          style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              completed={todo.completed}
            />
          ))}
        </Col> */}
        </Row>
      </div>
    </div>
  );
}

export default AddUser;
