package dev.abhinavvuppala.quotingbackend.beans.partner;

import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerDTO;
import dev.abhinavvuppala.quotingbackend.beans.product.productEntity;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;

@Service
public class partnerService {

    private final partnerRepository repository;

    @Autowired
    public partnerService(partnerRepository repository) {
        this.repository = repository;
    }

    public List<partnerEntity> getAllPartners(){
        return repository.findAll();
    }

    public partnerEntity getPartnerById(int id) throws EntityNotFoundException{
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Partner with id %d was not found",id)));
    }

    @Transactional
    public void updatePartner(partnerRequest partnerRequest,int id){
        partnerEntity partner = getPartnerById(id);
        partnerDTO partnerDTO = partnerRequest.getEntity();
        partner.setPartnerName(partnerDTO.getPartnerName());
        partner.setPartnerEmail(partnerDTO.getPartnerEmail());
        partner.setShippingAddress(partnerDTO.getShippingAddress());
        partner.setBillingAddress(partnerDTO.getBillingAddress());
        partner.setSeller(partnerDTO.isSeller());
        partner.setUpdatedAt(OffsetDateTime.now(ZoneOffset.UTC));
        partner.setUpdatedBy(partnerRequest.getUsername());
    }

    @Transactional
    public List<productEntity> getProducts(int id){
        partnerEntity partner = getPartnerById(id);
        return partner.getProductList();
    }

    @Transactional
    public void createPartner(partnerRequest partnerRequest){
        partnerEntity newPartnerEntity = new partnerEntity(partnerRequest.getEntity(),partnerRequest.getUsername());
        repository.save(newPartnerEntity);
    }

    @Transactional
    public void deletePartnerById(int id){
        repository.deleteById(id);
    }

    @Transactional
    public void deleteAllPartners(){repository.deleteAll();}

    public void flushPartnerEntity(){
        repository.flush();
    }

}
