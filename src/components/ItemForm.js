import userEvent from "@testing-library/user-event";
import React, { useState}from "react";
import { v4 as uuid } from "uuid";




function ItemForm({ onItemFormSubmit }) {
const [itemName, setItem] = useState("")
const [itemCategory, setCategory] =useState("Produce")
  
function handleSubmit(event){
  event.preventDefault()
    const newItem ={
        id: uuid(),
        name: itemName,
        category: itemCategory
      }
      onItemFormSubmit(newItem)
}

function inputOnChange(e){
  setItem(e.target.value)
}

function selectOnChange(e){
  setCategory(e.target.value)
}
  return (
    <form className="NewItem"  onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={inputOnChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={selectOnChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
