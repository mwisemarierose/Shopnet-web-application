import React,{useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import ProductModal from '../Product-card/ProductModal';
import SingleProduct from './SingleProduct';

export default function SearchInput(props) {
  const {location,menu}=props;
  const [products,setProducts]=useState([]);
  const [product,setProduct]=useState({});
  const [searchResult,setSearchResult]=useState([]);
  const [search,setSearch]=useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
     const fetchProductsInLocation=async()=>{
      try {
        const allProd=await axios.get(`https://shopnet-api.onrender.com/api/search/location?location=${location}`);
        setProducts(allProd.data.result);
        console.log(allProd.data.result);
      } catch (error) {
        console.log(error);
      }
     }
     fetchProductsInLocation();
  },[location]);

  const handleShowProductModal=(prod)=>{
    setProduct(prod);
    setShowModal(true);
  }
  const handleSearch=(queryValue)=>{
    setSearch(queryValue);
    const newProducts=products.filter(product=>{
      const toSearchFrom=[product.product_name, product.supermarket.super_name];
      return toSearchFrom.join(" ")
                         .toLowerCase()
                         .includes(queryValue.toLowerCase());
    });
    if(queryValue)
      setSearchResult(newProducts);
    else
      setSearchResult(products);
  }
  return (
    <div className="menu_frame">
    <Paper
      component="form"
      sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 600 }}
      onFocus={()=>props.setMenu("block")}
      className="input_search"
    >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search product ,stores..."
            inputProps={{ 'aria-label': 'search Products' }}
            onChange={(event)=>handleSearch(event.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
      </Paper>
        <div className="search_menu" style={{display:menu}}>
            {
              products && <SingleProduct products={search?searchResult:products} handleShowProductModal={handleShowProductModal}/>
            }
            {
              !products.length>0 && <div className="search_message">No Result Found for Selected location!</div>
            }
            {
              products.length>0 && search && !searchResult.length>0 && <div className="search_message" style={{padding:"0px 30px 0px 130px",marginTop:"-20px",lineHeight:"25px"}}>The product You looking for is not found in this location,perhaps you may try another location!</div>
            }
            {
            showModal && <ProductModal 
                            setShowModal={setShowModal} 
                            product={product}
                            showModal={showModal}
                            />
            }
        </div>
    </div>
  );
}