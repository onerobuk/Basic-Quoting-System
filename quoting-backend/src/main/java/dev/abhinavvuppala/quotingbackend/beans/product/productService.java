package dev.abhinavvuppala.quotingbackend.beans.product;

import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerEntity;
import dev.abhinavvuppala.quotingbackend.beans.product.dto.productDTO;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;

@Service
public class productService {
    private final productRepository productRepo;

    @Autowired
    public productService(productRepository productRepo) {
        this.productRepo = productRepo;
    }

    public List<productEntity> getAllProducts(){
        return productRepo.findAll();
    }

    @Transactional
    public void createProduct(productEntity product, PartnerEntity partner){
        partner.getProductList().add(product);
        productRepo.save(product);
    }

    @Transactional
    public void updateProduct(productRequest productRequest, int id){
        productDTO productDTO = productRequest.getEntity();
        productEntity product = getProductById(id);
        product.setProductPrice(productDTO.getPrice());
        product.setProductName(productDTO.getName());
        product.setUpdatedAt(OffsetDateTime.now(ZoneOffset.UTC));
        product.setUpdatedBy(productRequest.getUsername());
    }

    @Transactional
    public void deleteProductById(int id){
        productRepo.deleteById(id);
    }

    public productEntity getProductById(int id){
        return productRepo.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Product with id %d was not found",id)));
    }
}
