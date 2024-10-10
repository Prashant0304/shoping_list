// import shoppingList from "../data/data";
import List from "../component/List";
import Form from "./Form";
const Main = ({items,handleAddItems,onDeleteItem,handleDoneItem}) =>{
    return  (
        <div>
            <Form handleAddItems={handleAddItems}/>
            <ul className="mainWrapper">
            {items.map((item)=>(
            <List item={item} key={item.id} onDeleteItem={onDeleteItem} 
            handleDoneItem= {handleDoneItem} />
            ))}
        </ul>
        </div>
    
    );
}
export default Main;