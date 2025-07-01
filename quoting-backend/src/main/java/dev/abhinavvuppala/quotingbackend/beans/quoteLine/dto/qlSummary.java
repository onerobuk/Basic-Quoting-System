package dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto;

import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quotelineEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class qlSummary {
    private int qlId;
    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public qlSummary(quotelineEntity entity){
        this.qlId=entity.getQuoteLineId();
        this.productId=entity.getProduct().getProductId();
        this.productName=entity.getProduct().getProductName();
        this.quantity=entity.getQuantity();
        this.price=entity.getPrice();
    }

}
