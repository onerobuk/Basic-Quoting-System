package dev.abhinavvuppala.quotingbackend.beans.partner.dto;

import dev.abhinavvuppala.quotingbackend.beans.partner.partnerEntity;
import lombok.Data;

@Data
public class sellerDTO {
    int id;
    String name;
    public sellerDTO(partnerEntity partner){
        this.id = partner.getPartnerId();
        this.name = partner.getPartnerName();
    }
}
