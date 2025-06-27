package dev.abhinavvuppala.quotingbackend.beans.partner;

import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerDTO;
import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerMetadataDTO;
import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerSummaryDTO;
import dev.abhinavvuppala.quotingbackend.beans.product.ProductEntity;
import dev.abhinavvuppala.quotingbackend.beans.product.dto.productDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/partners")
public class PartnerController {
    private final PartnerService worker;

    @Autowired
    public PartnerController(PartnerService worker){
        this.worker = worker;
    }

    @GetMapping
    public ResponseEntity<List<partnerSummaryDTO>> getAll(){
        List<partnerSummaryDTO> partnerSummaries = worker.getAllPartners().stream().map(partnerSummaryDTO::new).toList();
        return ResponseEntity.ok(partnerSummaries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<partnerDTO> getPartner(@PathVariable int id) throws EntityNotFoundException {
        return ResponseEntity.ok(new partnerDTO(worker.getPartnerById(id)));
    }

    @GetMapping("/{id}/metadata")
    public ResponseEntity<partnerMetadataDTO> partnerMetadataDTO(@PathVariable int id) throws EntityNotFoundException {
        return ResponseEntity.ok(new partnerMetadataDTO(worker.getPartnerById(id)));
    }

    @GetMapping("/{id}/products")
    public ResponseEntity<List<productDTO>> getProducts(@PathVariable int id) throws EntityNotFoundException{
        List<ProductEntity> productList = worker.getProducts(id);
        List<productDTO> productDTOList = productList.stream().map(productDTO::new).toList();
        return ResponseEntity.ok(productDTOList);
    }

    @PostMapping
    public ResponseEntity<Void> createPartner(@RequestBody partnerDTO partnerDTO){
        PartnerEntity newPartner = new PartnerEntity(partnerDTO);
        worker.createPartner(newPartner);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePartner(@RequestBody partnerDTO partnerDTO,@PathVariable int id){
        worker.updatePartner(partnerDTO,id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartner(@PathVariable int id){
        worker.deletePartnerById(id);
        return ResponseEntity.ok().build();
    }

}
