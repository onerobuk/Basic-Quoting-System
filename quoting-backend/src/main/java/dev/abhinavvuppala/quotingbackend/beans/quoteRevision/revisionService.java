package dev.abhinavvuppala.quotingbackend.beans.quoteRevision;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class revisionService {

    private final revisionRepository repository;

    @Autowired
    public revisionService(revisionRepository repository) {
        this.repository = repository;
    }

    public quoteRevisionEntity getRevisionById(int id){
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Revision with id %d not found", id)));
    }

    public void createRevision(revisionRequest request){

    }
}
