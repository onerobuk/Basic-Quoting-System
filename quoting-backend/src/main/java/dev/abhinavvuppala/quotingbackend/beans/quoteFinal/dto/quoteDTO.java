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
    private int buyerId;
    private List<revisionDTO> revisions;
    private String status;
    private OffsetDateTime expirationDate;

    public quoteDTO(quoteFinalEntity entity){
        this.quoteID=entity.getQuoteId();
        this.buyerId=entity.getBuyer().getPartnerId();
        this.revisions=entity.getQuoteRevisionList().stream().map(revisionDTO::new).toList();
        this.status=entity.getStatus();
        this.expirationDate=entity.getExpirationDate();
    }


}
