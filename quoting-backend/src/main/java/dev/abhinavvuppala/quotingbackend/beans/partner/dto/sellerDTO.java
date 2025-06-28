package dev.abhinavvuppala.quotingbackend.beans.partner.dto;

import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerEntity;
import lombok.Data;

@Data
public class sellerDTO {
    int id;
    String name;
    public sellerDTO(PartnerEntity partner){
        this.id = partner.getPartnerId();
        this.name = partner.getPartnerName();
    }
}
