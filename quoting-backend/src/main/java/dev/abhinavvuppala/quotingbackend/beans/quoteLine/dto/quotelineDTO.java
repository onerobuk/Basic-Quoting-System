package dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto;

import dev.abhinavvuppala.quotingbackend.beans.product.dto.productDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quoteLineEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class quotelineDTO {
    private int id;
    private int revisionId;
    private productDTO productDTO;
    private int quantity;
    private double price;
    private String currencyCode;

    public quotelineDTO(quoteLineEntity entity){
        this.id = entity.getQuoteLineId();
        this.revisionId = entity.getQuoteRevision().getRevisionId();
        this.productDTO = new productDTO(entity.getProduct());
        this.quantity=entity.getQuantity();
        this.price= entity.getPrice();
        this.currencyCode= entity.getCurrencyCode();

    }
}
