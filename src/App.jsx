import { useEffect, useState } from "react";
import Form from "./components/Form";
import Listitem from "./components/Listitem";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const [maxPage, setMaxPage] = useState();

  //API'ye göndereceğimiz parametreler
  const params = {
    _limit: 4,
    _page: page,
  };

  //her sayfa değiştiğinde güncel verileri al.
  useEffect(() => {
    setTodos(null);

    //Axios ile get isteği
    axios.get("http://localhost:3000/todos", { params }).then((res) => {
      // Toplam sayfa sayısını hesaplama
      const count = Number(res.headers["x-total-count"]);
      setMaxPage(Math.ceil(count / params._limit));
      setTotalCount(count);
      setTodos(res.data);
    });
  }, [page]);

  return (
    <div className="container p-5">
      <h2 className="text-center text-info">
        To Do <span className="text-danger"> List</span>
      </h2>
      <Form
        params={params}
        totalCount={totalCount}
        maxPage={maxPage}
        setPage={setPage}
        todos={todos}
        setTodos={setTodos}
      />
      <ul className="list-group">
        {/* veriler henüz gelmediyse */}
        {!todos && <Loading />}
        {/* Optional chaining */}
        {todos?.map((todo) => (
          <Listitem setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className="d-flex justify-content-between my-5">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-primary"
        >
          {"<Geri"}
        </button>
        <span className="lead fw-bold">{page}</span>

        <button
          disabled={page === maxPage}
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-primary"
        >
          {"İleri>"}
        </button>
      </div>
    </div>
  );
}
export default App;
