package dev.abhinavvuppala.quotingbackend.beans.quoteRevision;

import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto.revisionDTO;
import dev.abhinavvuppala.quotingbackend.util.EntityRequest;
import lombok.Getter;

@Getter
public class revisionRequest extends EntityRequest<revisionDTO> {
    private int buyerId;
}
