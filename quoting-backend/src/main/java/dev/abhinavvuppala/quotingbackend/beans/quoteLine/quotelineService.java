package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import dev.abhinavvuppala.quotingbackend.beans.product.productEntity;
import dev.abhinavvuppala.quotingbackend.beans.product.productService;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto.quotelineDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.quoteRevisionEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.revisionService;
import dev.abhinavvuppala.quotingbackend.util.Currency;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Service
public class quotelineService {

    private final quotelineRepository repository;
    private final productService productService;
    private final revisionService revisionService;

    @Autowired
    public quotelineService(quotelineRepository repository, productService productService, revisionService revisionService) {
        this.repository = repository;
        this.productService = productService;
        this.revisionService = revisionService;
    }

    public double convertPrice(quotelineEntity entity, String toCurrency){
        String fromCurrency = entity.getCurrencyCode();
        if (toCurrency.equals("USD")&& !fromCurrency.equals("USD")){
            return entity.getPrice()* Currency.valueOf(toCurrency).getUSDrate();
        } else if (fromCurrency.equals("USD")){
            return entity.getPrice()/Currency.valueOf(toCurrency).getUSDrate();
        } else return entity.getPrice();
    }

    public quotelineEntity getQuotelineById(int id){
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Quoteline with id %d not found",id)));
    }

    @Transactional
    public void createQuoteline(quotelineRequest request){
        quoteRevisionEntity revision = revisionService.getRevisionById(request.getEntity().getRevisionId());
        productEntity product = productService.getProductById(request.getEntity().getProductDTO().getId());
        quotelineEntity entity = quotelineEntity.fromDTO(request.getEntity(),request.getUsername(), revision, product);
        revision.getQuoteLines().add(entity);
        repository.save(entity);
    }

    @Transactional
    public void updateQuoteline(quotelineRequest request){
        quotelineEntity entity = getQuotelineById(request.getEntity().getId());
        quotelineDTO DTO = request.getEntity();
        entity.setQuantity(DTO.getQuantity());
        if (!entity.getCurrencyCode().equals(DTO.getCurrencyCode())){
            entity.setPrice(convertPrice(entity,DTO.getCurrencyCode()));
            entity.setCurrencyCode(DTO.getCurrencyCode());
        }
        entity.setUpdatedBy(request.getUsername());
        entity.setUpdatedAt(OffsetDateTime.now(ZoneOffset.UTC));
    }

    @Transactional
    public void deleteQuoteline(int id){
        quotelineEntity entity = getQuotelineById(id);
        entity.getQuoteRevision().getQuoteLines().remove(entity);
        repository.delete(entity);
    }


}
