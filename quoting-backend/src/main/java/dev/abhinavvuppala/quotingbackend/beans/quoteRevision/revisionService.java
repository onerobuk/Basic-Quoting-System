package dev.abhinavvuppala.quotingbackend.beans.quoteRevision;

import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteService;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto.revisionDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quotelineEntity;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class revisionService {

    @Autowired
    public revisionService(revisionRepository repository, quoteService quoteService) {
        this.repository = repository;
        this.quoteService = quoteService;
    }

    private final revisionRepository repository;
    private final quoteService quoteService;

    public quoteRevisionEntity getRevisionById(int id){
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Revision with id %d not found", id)));
    }

    @Transactional
    public void createRevision(revisionRequest request){
        quoteFinalEntity quoteEntity = quoteService.getQuoteById(request.getEntity().getQuoteId());
        quoteRevisionEntity newRevision = quoteRevisionEntity.fromDTO(request,quoteEntity);
        repository.save(newRevision);
    }

    @Transactional
    public void deleteById(int id){
        quoteRevisionEntity entity = getRevisionById(id);
        entity.getQuoteEntity().getQuoteRevisionList().remove(entity);
        repository.delete(entity);
    }
}
