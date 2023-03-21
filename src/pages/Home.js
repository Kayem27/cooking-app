import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Logo from "../components/Logo";

const Home = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("tomato");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s="+inputValue)
      .then((res) => setData(res.data.meals))
      .catch((err) => console.error(err))
  }, [inputValue]);

  return (
    <>
      <Logo />
      <h1>Les recettes</h1>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className="search"
        type="text"
        placeholder="Taper le nom d'un aliment (en anglais)"
      />
      <main className="mes-recettes">
        {data && data.map((recette) => (
          <Card key={recette.idMeal} recette={recette} />
        ))}
      </main>
    </>
  );
};

export default Home;
