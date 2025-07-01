package dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto;

import dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto.quotelineDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.quoteRevisionEntity;
import lombok.Data;

import java.util.List;

@Data
public class revisionDTO {
    private int revisionId;
    private int quoteId;
    private int revisionNumber;
    private List<quotelineDTO> quoteLines;
    private String notes;

    public revisionDTO(quoteRevisionEntity entity){
        this.revisionId = entity.getRevisionId();
        this.quoteId = entity.getQuoteEntity().getQuoteId();
        this.notes = entity.getNotes();
        this.revisionNumber=entity.getRevisionNumber();
        this.quoteLines = entity.getQuoteLines().stream().map(quotelineDTO::new).toList();
    }

}
