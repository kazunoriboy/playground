import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// Styles
import { Wrapper } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  titile: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await(await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>somthing went wrong</div>
  
  return <div className="App">start</div>;
};

export default App;
