import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems, setSearch] = useState("")
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
 

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return (item.category === selectedCategory);
  });
  function handleSearchChange(event){
    setSearch(event.target.value)
    
    console.log(searchedItems)
  }
  
  const searchedItemsToDisplay = itemsToDisplay.filter((item) =>{
    if (searchedItems === "") return true;

    return (item.name.includes(searchedItems));
  })

  function onItemFormSubmit(newItem){
    
      setItems([...items, newItem])
    }
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchedItems}/>
      <ul className="Items">
        {searchedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
