import { useState } from "react";

export function NewTodoForm(props) {
	
	const [newItem, setNewItem] = useState("");
	
  function handleSubmit(e) {
    e.preventDefault();
    // to make sure we dont refresh page each time we submit
		if(newItem  === "") return
		props.onSubmit(newItem)
    setNewItem("")
  }

	return (	

		<form onSubmit={handleSubmit} className="new-item-form">
			<div className="form-row">
				<label htmlFor="item" /> Enter Task
				<input
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					type="text"
					id="item"
				/>
			</div>
			<button className="btn"> Add </button>
		</form>
	)
}
