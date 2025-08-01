package dev.abhinavvuppala.quotingbackend.beans.quoteFinal;

import dev.abhinavvuppala.quotingbackend.beans.partner.partnerEntity;
import dev.abhinavvuppala.quotingbackend.beans.partner.partnerService;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.quoteRevisionEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.revisionRequest;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.revisionService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class quoteService {
    private final quoteRepository repository;
    private final partnerService partnerService;
    private final revisionService revisionService;

    @Autowired
    public quoteService(quoteRepository repository, partnerService partnerService, revisionService revisionService) {
        this.repository = repository;
        this.partnerService = partnerService;
        this.revisionService = revisionService;
    }

    @Transactional
    public quoteFinalEntity getQuoteById(int id){
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Quote with id %d not found",id)));
    }

//    @Transactional
//    public void createQuote(revisionRequest request){
//        partnerEntity buyer = partnerService.getPartnerById(request.getBuyerId());
//        quoteFinalEntity newQuote = quoteFinalEntity.createQuote(request.getUsername(),buyer);
//        revisionService.createRevision(request,newQuote);
//        repository.save(newQuote);
//    }


    @Transactional
    public void deleteQuoteById(int id){
        repository.deleteById(id);
    }
}
