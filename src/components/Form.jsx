import axios from "axios";
import { v4 } from "uuid";

const Form = ({ setTodos, todos, totalCount, maxPage, setPage, params }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;
    //verileri kontrol etme
    if (!title) {
      return alert("Lütfen başlık yazınız");
    }
    //veritabanına kaydedilecek veriyi hazırlar
    const newTodo = {
      title,
      status,
      id: v4(),
      isDone: false,
      date: new Date().toLocaleDateString(),
    };
    //Oluşturduğumuz todo yu API'a ekleme
    axios
      .post("http://localhost:3000/todos", newTodo)
      //API güncellenirse state'i / arayüzü güncelleme
      .then(() => {
        //Önündeki sayfa doluysa son sayfaya yönlendir.
        if (todos.length === params._limit) {
          //Eğer ki son sayfa doluysa bir fazlasına değilse son sayfaya yönlendir.
          setPage(totalCount % params._limit === 0 ? maxPage + 1 : maxPage);
          return;
        }
        setTodos((todos) => [...todos, newTodo]);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        className="form-control shadow"
        placeholder="Ör:JS projesi"
        type="text"
      />
      <select className="form-select w-50">
        <option value="job">İş</option>
        <option value="daily">Günlük</option>
        <option value="important">Önemli</option>
      </select>
      <button className="btn btn-primary shadow">Gönder</button>
    </form>
  );
};

export default Form;
