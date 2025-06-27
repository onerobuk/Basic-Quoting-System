package dev.abhinavvuppala.quotingbackend.beans.product;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepo;

    public ProductService(ProductRepository productRepo) {
        this.productRepo = productRepo;
    }

    public List<ProductEntity> getAllProducts(){
        return productRepo.findAll();
    }

    @Transactional
    public void saveProduct(ProductEntity product){
        product.getPartnerEntity().getProductList().add(product);
        productRepo.save(product);
    }

    @Transactional
    public void deleteProductById(int id){
        productRepo.deleteById(id);
    }

    public ProductEntity getProductById(int id){
        return productRepo.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Product with id %d was not found",id)));
    }
}
