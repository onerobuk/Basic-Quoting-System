package dev.abhinavvuppala.quotingbackend.beans.product.dto;


import dev.abhinavvuppala.quotingbackend.beans.product.productEntity;
import lombok.*;

import java.time.OffsetDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class productMetadataDTO {
    private OffsetDateTime createdAt;

    private OffsetDateTime updatedAt;

    private String createdBy;

    private String updatedBy;

    public productMetadataDTO(productEntity productEntity){
        this.createdAt = productEntity.getCreatedAt();
        this.updatedAt = productEntity.getUpdatedAt();
        this.createdBy = productEntity.getCreatedBy();
        this.updatedBy = productEntity.getUpdatedBy();
    }

}
