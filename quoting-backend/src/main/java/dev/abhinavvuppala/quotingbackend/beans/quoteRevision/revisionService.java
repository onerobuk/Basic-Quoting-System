package dev.abhinavvuppala.quotingbackend.beans.quoteRevision;

import dev.abhinavvuppala.quotingbackend.beans.product.productEntity;
import dev.abhinavvuppala.quotingbackend.beans.product.productService;
import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quotelineEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.dto.revisionDTO;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class revisionService {

    private final productService productService;
    private final revisionRepository repository;

    @Autowired
    public revisionService(revisionRepository repository, productService productService) {
        this.repository = repository;
        this.productService = productService;
    }

    public quoteRevisionEntity getRevisionById(int id){
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Revision with id %d not found", id)));
    }

    @Transactional
    public void createRevision(revisionRequest request,quoteFinalEntity quoteEntity){
        revisionDTO dto = request.getEntity();
        quoteRevisionEntity newRevision = quoteRevisionEntity.fromDTO(request,quoteEntity);
        newRevision.getQuoteLines().addAll(dto.getQuoteLines().stream().map(quotelineDTO -> {
            productEntity product = productService.getProductById(quotelineDTO.getProductDTO().getId());
            return quotelineEntity.fromDTO(quotelineDTO, request.getUsername(), newRevision, product);
        }).toList());
    }

    @Transactional
    public void deleteById(int id){
        quoteRevisionEntity entity = getRevisionById(id);
        entity.getQuoteEntity().getQuoteRevisionList().remove(entity);
        repository.delete(entity);
    }
}
