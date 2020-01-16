import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./style.css";
import Button from "../../components/Button";

const Task = () => {
  const history = useHistory();

  const home = () => {
    history.push("/home");
  };

  return (
    <>
      <div className={styles.task}>
        <h1>Тестовое задание</h1>
        <h2>
          Разработать прототип blog-сайта. Должна быть возможность
          создать/редактировать/удалить/просматривать посты (поля title,
          content, status[new, open, closed], tags) и добавлять/просматривать
          комментарии к посту (поля content, email) и загружать/просматривать
          картинки к посту. Использовать ООП, голый PHP (без бекенд
          фреймворков), MySQL. Будет плюсом если реализовать через ajax запросы
          (чтобы все изменения происходили без перезагрузки страницы) или
          применить vue js после разработки нужно разместить свой блог на
          бесплатном хостинге и прислать исходники.
        </h2>
        <Button handleClick={home} theme="edit">
          Home
        </Button>
      </div>
    </>
  );
};
export default Task;
