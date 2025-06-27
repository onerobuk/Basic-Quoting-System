package dev.abhinavvuppala.quotingbackend.beans.partner.dto;


import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerEntity;
import lombok.*;

import java.time.OffsetDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class partnerMetadataDTO {
    private OffsetDateTime createdAt;

    private OffsetDateTime updatedAt;

    private String createdBy;

    private String updatedBy;

    public partnerMetadataDTO(PartnerEntity partnerEntity){
        this.createdAt = partnerEntity.getCreatedAt();
        this.updatedAt = partnerEntity.getUpdatedAt();
        this.createdBy = partnerEntity.getCreatedBy();
        this.updatedBy = partnerEntity.getUpdatedBy();
    }

}
