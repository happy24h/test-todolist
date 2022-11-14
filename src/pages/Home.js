import { Typography, Divider, Button } from "antd";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
const { Title } = Typography;
function Home() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}>
      <Title style={{ textAlign: "center" }}>Project: Todo List</Title>
      <Link style={{ margin: "0 auto" }} to={"/add-user"}>
        <Button type="primary">Add New Task</Button>
      </Link>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default Home;
