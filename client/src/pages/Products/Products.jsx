import React, { useState } from 'react'
import "./Products.scss"
import List from '../../componets/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice]= useState(1000)
  const[sort,setSort]= useState(null)
  const[selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) =>{
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item=>item !==value)
    );
  };


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=> (
          <div className="inputItem" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>          
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>250</span>
            <input type="range" min={250} max={1500} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Low to High)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="desc" onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price (High to Low)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="/img/id1.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products