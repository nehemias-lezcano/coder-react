import React from 'react';
import './item.style.css';


const ItemListContainer = (props) => {
return (
<div>
<h1>{props.greeting}</h1>
</div>
);
}

export default ItemListContainer;