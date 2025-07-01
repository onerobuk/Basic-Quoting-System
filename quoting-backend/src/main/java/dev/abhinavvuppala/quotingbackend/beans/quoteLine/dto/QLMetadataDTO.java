package dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto;

import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quotelineEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QLMetadataDTO {
    private OffsetDateTime createdAt;

    private OffsetDateTime updatedAt;

    private String createdBy;

    private String updatedBy;

    public QLMetadataDTO(quotelineEntity qlEntity){
        this.createdAt = qlEntity.getCreatedAt();
        this.updatedAt = qlEntity.getUpdatedAt();
        this.createdBy = qlEntity.getCreatedBy();
        this.updatedBy = qlEntity.getUpdatedBy();
    }

}
