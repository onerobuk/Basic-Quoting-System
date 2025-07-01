package dev.abhinavvuppala.quotingbackend.beans.quoteFinal.dto;

import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class quoteMetadataDTO {
    private OffsetDateTime createdAt;

    private OffsetDateTime updatedAt;

    private String createdBy;

    private String updatedBy;

    public quoteMetadataDTO(quoteFinalEntity entity){
        this.createdAt=entity.getCreatedAt();
        this.updatedAt=entity.getUpdatedAt();
        this.createdAt=entity.getCreatedAt();
        this.createdBy=entity.getCreatedBy();
    }
}
