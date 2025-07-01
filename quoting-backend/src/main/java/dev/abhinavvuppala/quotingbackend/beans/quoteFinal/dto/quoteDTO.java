package dev.abhinavvuppala.quotingbackend.beans.quoteFinal.dto;

import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto.revisionDTO;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.List;

@Data
public class quoteDTO {
    private int quoteID;
    private partnerDTO buyer;
    private List<revisionDTO> revisions;
    private String status;
    private double totalCost;
    private OffsetDateTime expirationDate;

    public quoteDTO(quoteFinalEntity entity){
        this.quoteID=entity.getQuoteId();
        this.buyer=new partnerDTO(entity.getBuyer());
        this.revisions=entity.getQuoteRevisionList().stream().map(revisionDTO::new).toList();
    }


}
