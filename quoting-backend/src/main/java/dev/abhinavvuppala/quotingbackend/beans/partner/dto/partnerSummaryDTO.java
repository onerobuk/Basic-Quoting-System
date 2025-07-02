package dev.abhinavvuppala.quotingbackend.beans.partner.dto;

import dev.abhinavvuppala.quotingbackend.beans.partner.partnerEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class partnerSummaryDTO {
    private int id;
    private String name;
    private boolean isSeller;

    public partnerSummaryDTO(partnerEntity partnerEntity){
        this.id = partnerEntity.getPartnerId();
        this.name = partnerEntity.getPartnerName();
        this.isSeller = partnerEntity.isSeller();
    }
}
