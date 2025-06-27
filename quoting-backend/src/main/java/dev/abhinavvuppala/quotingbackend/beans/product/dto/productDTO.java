package dev.abhinavvuppala.quotingbackend.beans.product.dto;

import dev.abhinavvuppala.quotingbackend.beans.product.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class productDTO {
    private int id;
    private String name;
    private double price;
    private String seller;

    public productDTO(ProductEntity product){
        this.id= product.getProductId();
        this.name = product.getProductName();
        this.price = product.getProductPrice();
        this.seller = product.getPartnerEntity().getPartnerName();
    }
}
