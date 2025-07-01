package dev.abhinavvuppala.quotingbackend.beans.quoteFinal;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class quoteService {
    private final quoteRepository repository;

    @Autowired
    public quoteService(quoteRepository repository) {
        this.repository = repository;
    }

    public quoteFinalEntity getQuoteById(int id){
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Quote with id %d not found",id)));
    }

    @Transactional
    public void deleteQuoteById(int id){
        repository.deleteById(id);
    }
}
