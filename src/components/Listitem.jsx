import axios from "axios";
import { types } from "../constants";
import { formatDate } from "./helper";
import { useState, useRef } from "react";

const Listitem = ({ setTodos, todo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  //Referansı tanımlanan elemanlara erişme
  const titleRef = useRef();
  const selectRef = useRef();
  // console.log(titleRef.current);

  //!Silme İşlemi
  const handleDelete = () => {
    //Veritabanından silme
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      //İşlem başarılı olursa arayüzü güncelle
      .then(() => setTodos((todos) => todos.filter((i) => i.id !== todo.id)));
  };
  //! Güncelleme
  const handleEdit = () => {
    //İnput değerlerine erişme
    const newValues = {
      title: titleRef.current.value,
      status: selectRef.current.value,
    };
    // console.log(todo);
    //API'yi güncelleme
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, newValues)
      .then(() => {
        //todo objesini güncellemek
        const updated = { ...todo, ...newValues };
        //State'de tuttuğumuz dizideki eski obje yerine update'i ekleme
        setTodos((todos) =>
          todos.map((i) => (i.id === updated.id ? updated : i))
        );
      });
    setIsEditMode(false);
  };
  return (
    <li className="relative px-3 py-3 list-group-item d-flex justify-content-between align-items-center">
      {/* Durum alanı */}
      <div className="flex">
       
        {isEditMode ? (
          <select ref={selectRef} defaultValue={todo.status}>
            <option value="job">İş</option>
            <option value="daily">Günlük</option>
            <option value="important">Önemli</option>
          </select>
        ) : (
          <span className={`badge ${types[todo.status]?.color}`}>
            {types[todo.status]?.text}
          </span>
        )}
      </div>

      {/* Yazı içeriği kısmı */}
      {isEditMode ? (
        <input ref={titleRef} defaultValue={todo.title} type="text" />
      ) : (
        <span>{todo.title}</span>
      )}

      {/* Butonlar alanı */}
      <div className="btn-group">
        {isEditMode ? (
          <>
            <button onClick={handleEdit} className="btn btn-sm btn-success">
              Kaydet
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="btn btn-sm btn-secondary"
            >
              İptal
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditMode(true)}
              className="btn btn-sm btn-primary"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-sm btn-danger">
              Del
            </button>
          </>
        )}
      </div>
      {/* Tarih Alanı */}
      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default Listitem;
