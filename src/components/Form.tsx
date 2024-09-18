import { categories } from "../data/categories";
import { useState } from "react";

export default function Form() {
  const [activity, setActivity] = useState({
    category: "",
    name: "",
    calories: 0,
  });
  return (
    <form className="p-10 space-y-5 bg-white rounded-lg shadow">
      <div className="grid gap-3 drid-cols-1">
        <label htmlFor="Category" className="font-bold">
          Categoria:
        </label>
        <select
          className="w-full p-2 bg-white border border-gray-200 rounded-lg"
          id="category"
          value={activity.category}
        >
          {categories.map((categoriy) => (
            <option key={categoriy.id} value={categoriy.id}>
              {categoriy.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-3 drid-cols-1">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          id="name"
          type="text"
          value={activity.name}
          className="p-2 border border-gray-200 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja, Ensalada; Ejercicio, Pesas, Bicicleta"
        />
      </div>
      <div className="grid gap-3 drid-cols-1">
        <label htmlFor="calories" className="font-bold">
          Calorias :
        </label>
        <input
          id="calories"
          type="number"
          value={activity.calories}
          className="p-2 border border-gray-200 rounded-lg"
          placeholder="Calorias, ej. 300 o 500s"
        />
      </div>
      <input
        type="submit"
        className="w-full p-2 font-bold text-white uppercase transition-all bg-gray-300 cursor-pointer hover:bg-gray-400"
      />
    </form>
  );
}
