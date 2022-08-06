import React, {useState, useEffect} from 'react'


const useCart = ()=>{
    const [list, setList] = useState([]);
    const [totalCost, setCost] = useState(0);

    function updateCart(item){
        const newItemsList = [...list, item];
        setList(newItemsList);
        setCost(totalCost + parseInt(item.props.children[1].props.children));
    }



    return {list, totalCost, updateCart};
}



export default useCart;