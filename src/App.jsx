import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Button, Box, Paper } from '@mui/material';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
  { id: 4, name: 'Smartwatch', price: '$199', inStock: true },
  { id: 5, name: 'Keyboard', price: '$99', inStock: false },
];

const App = () => {
  // Define initial product data state
  const [products, setProducts] = useState(initialProducts);

  // State to manage filtering: 'all', 'inStock', 'outOfStock'
  const [filter, setFilter] = useState('all');

  // Callback to remove products
  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Paper 
        elevation={0} 
        style={{ 
          padding: '40px', 
          borderRadius: '24px', 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.08)' 
        }}
      >
        <Box textAlign="center" marginBottom="45px">
          {/* Add 'Product Dashboard' title here */}
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            style={{ fontWeight: 800, color: '#1a237e', letterSpacing: '-0.5px' }}
          >
            Product Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
            Manage and monitor your catalog with live availability filtering.
          </Typography>
        </Box>

        {/* Add buttons to allow filtering by availability */}
        <Box display="flex" justifyContent="center" gap={2} marginBottom="40px">
          <Button 
            variant={filter === 'all' ? 'contained' : 'outlined'} 
            color="primary"
            onClick={() => setFilter('all')}
            style={{ borderRadius: '12px', padding: '10px 24px', textTransform: 'none', fontWeight: 600 }}
          >
            All Products ({products.length})
          </Button>
          <Button 
            variant={filter === 'inStock' ? 'contained' : 'outlined'} 
            color="success"
            onClick={() => setFilter('inStock')}
            style={{ borderRadius: '12px', padding: '10px 24px', textTransform: 'none', fontWeight: 600 }}
          >
            In Stock ({products.filter(p => p.inStock).length})
          </Button>
          <Button 
            variant={filter === 'outOfStock' ? 'contained' : 'outlined'} 
            color="error"
            onClick={() => setFilter('outOfStock')}
            style={{ borderRadius: '12px', padding: '10px 24px', textTransform: 'none', fontWeight: 600 }}
          >
            Out of Stock ({products.filter(p => !p.inStock).length})
          </Button>
        </Box>

        {/* Render the ProductList component and pass filtered products and remove handler */}
        <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
      </Paper>
    </Container>
  );
};

export default App;
