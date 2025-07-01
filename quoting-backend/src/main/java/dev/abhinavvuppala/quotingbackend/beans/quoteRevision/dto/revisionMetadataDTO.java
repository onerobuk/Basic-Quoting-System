package dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto;

import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class revisionMetadataDTO {
    private OffsetDateTime createdAt;

    private OffsetDateTime updatedAt;

    private String createdBy;

    private String updatedBy;

    public revisionMetadataDTO(quoteFinalEntity entity){
        this.createdAt=entity.getCreatedAt();
        this.updatedAt=entity.getUpdatedAt();
        this.createdAt=entity.getCreatedAt();
        this.createdBy=entity.getCreatedBy();
    }
}
