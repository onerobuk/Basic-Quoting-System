package dev.abhinavvuppala.quotingbackend.beans.product;

import dev.abhinavvuppala.quotingbackend.beans.partner.partnerEntity;
import dev.abhinavvuppala.quotingbackend.beans.partner.partnerService;
import dev.abhinavvuppala.quotingbackend.beans.product.dto.productDTO;
import dev.abhinavvuppala.quotingbackend.beans.product.dto.productMetadataDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class productController {
    private final productService productService;
    private final partnerService partnerService;

    @Autowired
    public productController(productService service, partnerService partnerService) {
        this.productService = service;
        this.partnerService = partnerService;
    }

    @GetMapping
    public ResponseEntity<List<productDTO>> getAllProducts(){
        List<productDTO> productDTOList = productService.getAllProducts().stream().map(productDTO::new).toList();
        return ResponseEntity.ok(productDTOList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<productDTO> getProduct(@PathVariable int id){
        productDTO productDTO = new productDTO(productService.getProductById(id));
        return ResponseEntity.ok(productDTO);
    }

    @GetMapping("/{id}/metadata")
    public ResponseEntity<productMetadataDTO> getProductMetadata(@PathVariable int id){
        productMetadataDTO productDTO = new productMetadataDTO(productService.getProductById(id));
        return ResponseEntity.ok(productDTO);
    }

    @PostMapping
    public ResponseEntity<Void> createProduct(@RequestBody productRequest productRequest){
        partnerEntity partner = partnerService.getPartnerById(productRequest.getEntity().getSellerId());
        productEntity productEntity = dev.abhinavvuppala.quotingbackend.beans.product.productEntity.fromDTO(productRequest,partner);
        productService.createProduct(productEntity,partner);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateProduct(@RequestBody productRequest productRequest,@PathVariable int id){
        productService.updateProduct(productRequest,id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable int id){
        productService.deleteProductById(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

}
