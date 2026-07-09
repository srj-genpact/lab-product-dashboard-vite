import styles from '../styles/ProductCard.module.css';
import { Button, Typography } from '@mui/material';

const ProductCard = ({ product, onRemove }) => {
  // Apply conditional class to <div> below for out-of-stock items
  const cardClass = `${styles.card} ${!product.inStock ? `${styles.outOfStockClass} outOfStockClass` : ''}`;

  return (
    <div className={cardClass}>
      {/* Display product name */}
      <Typography variant="h6" component="h2" gutterBottom style={{ fontWeight: 600, color: '#1a237e' }}>
        {product.name}
      </Typography>
      
      {/* Display product price */}
      <Typography variant="body1" color="text.secondary" gutterBottom style={{ fontWeight: 500 }}>
        Price: {product.price}
      </Typography>
      
      {/* Show if the product is in stock or out of stock */}
      <Typography 
        variant="body2" 
        style={{ 
          color: product.inStock ? '#2e7d32' : '#d32f2f', 
          fontWeight: 700,
          marginBottom: '16px'
        }}
      >
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </Typography>

      {/* Button container - sibling to title, does not wrap it */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
        <Button 
          variant="contained" 
          color="error" 
          size="small" 
          onClick={() => onRemove(product.id)}
          style={{ textTransform: 'none', borderRadius: '8px' }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
