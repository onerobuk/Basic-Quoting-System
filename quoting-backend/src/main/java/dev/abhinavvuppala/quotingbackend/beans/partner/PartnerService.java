package dev.abhinavvuppala.quotingbackend.beans.partner;

import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerDTO;
import dev.abhinavvuppala.quotingbackend.beans.product.ProductEntity;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartnerService {

    private final PartnerRepository repository;

    @Autowired
    public PartnerService(PartnerRepository repository) {
        this.repository = repository;
    }

    public List<PartnerEntity> getAllPartners(){
        return repository.findAll();
    }

    public PartnerEntity getPartnerById(int id) throws EntityNotFoundException{
        return repository.findById(id).orElseThrow(()->new EntityNotFoundException(String.format("Partner with id %d was not found",id)));
    }

    @Transactional
    public void updatePartner(partnerDTO partnerDTO,int id){
        PartnerEntity partner = getPartnerById(id);
        partner.setPartnerName(partnerDTO.getPartnerName());
        partner.setPartnerEmail(partnerDTO.getPartnerEmail());
        partner.setShippingAddress(partnerDTO.getShippingAddress());
        partner.setBillingAddress(partnerDTO.getBillingAddress());
        partner.setSeller(partnerDTO.isSeller());
    }

    @Transactional
    public List<ProductEntity> getProducts(int id){
        PartnerEntity partner = getPartnerById(id);
        return partner.getProductList();
    }

    @Transactional
    public void createPartner(PartnerEntity newPartnerEntity){
        repository.save(newPartnerEntity);
    }

    @Transactional
    public void deletePartnerById(int id){
        repository.deleteById(id);
    }

    public void flushPartnerEntity(){
        repository.flush();
    }

}
