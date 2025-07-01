package dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto;

import lombok.Data;

@Data
public class revisionDTO {
    private int revisionId;
    private int quoteId;
    private String notes;
    private boolean changedNotes;

}
