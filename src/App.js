import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer"; 
import { useState } from "react";

function App() {
  const [items,setItems]=useState([]);
  const handleAddItems = (item) =>{
    setItems(items=>[...items,item]);
  };
  const handleDeleteItem=(id)=>{
    setItems(items=>items.filter(item=>item.id!==id)); 
  };
  const handleDoneItem = (id)=>{
    setItems((items)=>
      items.map((item)=>
        item.id === id ? {...item,packed: !item.packed } :
      item
      )
    );
  };
  return <div className="appWrapper"> 
    <Header/>
    <Main 
    items={items} 
    handleAddItems={handleAddItems} 
    onDeleteItem={handleDeleteItem}
    /> 
    <Footer/> 
     </div>;
}

export default App;
