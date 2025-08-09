package dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto;

import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quotelineEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class quotelineDTO {
    private String productName;
    private int productId;
    private int quantity;
    private double price;
    private String currencyCode;

    public quotelineDTO(quotelineEntity entity){
        this.productName = entity.getProduct().getProductName();
        this.productId = entity.getProduct().getProductId();
        this.quantity=entity.getQuantity();
        this.price= entity.getPrice();
        this.currencyCode= entity.getCurrencyCode();

    }
}
