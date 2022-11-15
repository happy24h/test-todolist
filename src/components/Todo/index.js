import { Row, Tag, Checkbox, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTodoStatus } from "../../redux/actions";
import "../Component.css";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, completed, id, description }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };

  return (
    <Row
      className="row-todo"
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}>
      <div>
        <div></div>
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          <div className="checkbox-todo">
            {name} -{" "}
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
              {prioriry}
            </Tag>
          </div>
        </Checkbox>
        <div className="description-todo">{description}</div>
      </div>

      <div>
        {" "}
        <Link to={`edit-user/${id}`}>
          <Button type="primary" style={{ margin: "0 5px" }}>
            Update
          </Button>
        </Link>
        <Button type="primary" danger style={{ margin: "0 5px" }}>
          Delete
        </Button>
      </div>
    </Row>
  );
}
