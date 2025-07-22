package dev.abhinavvuppala.quotingbackend.beans.partner.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import dev.abhinavvuppala.quotingbackend.beans.partner.partnerEntity;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class partnerDTO {
    private int partnerId;
    private String partnerName;
    private String partnerEmail;
    private String shippingAddress;
    private String billingAddress;

    @JsonProperty("isSeller")
    private boolean isSeller;

    public partnerDTO(partnerEntity partnerEntity){
        this.partnerId = partnerEntity.getPartnerId();
        this.partnerName = partnerEntity.getPartnerName();
        this.partnerEmail = partnerEntity.getPartnerEmail();
        this.shippingAddress = partnerEntity.getShippingAddress();
        this.billingAddress = partnerEntity.getBillingAddress();
        this.isSeller = partnerEntity.isSeller();
    }

}
