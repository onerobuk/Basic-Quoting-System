package dev.abhinavvuppala.quotingbackend.beans.product.dto;

import dev.abhinavvuppala.quotingbackend.beans.partner.dto.sellerDTO;
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
    private sellerDTO seller;
    private String currencyCode;

    public productDTO(ProductEntity product){
        this.id= product.getProductId();
        this.name = product.getProductName();
        this.price = product.getProductPrice();
        this.seller = new sellerDTO(product.getPartnerEntity());
        this.currencyCode = product.getProductCurrency();
    }
}
