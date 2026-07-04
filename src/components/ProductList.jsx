import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography, Box } from '@mui/material';

const ProductList = ({ products, onRemove }) => {
  // Check if the product list is empty and display a message if needed
  if (!products || products.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px" width="100%">
        <Typography variant="h6" color="text.secondary">
          No products available.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {/* Iterate over the products array and render a ProductCard for each product */}
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} onRemove={onRemove} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
