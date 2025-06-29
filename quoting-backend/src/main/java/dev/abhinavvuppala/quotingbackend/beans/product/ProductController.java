package dev.abhinavvuppala.quotingbackend.beans.product;

import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerEntity;
import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerService;
import dev.abhinavvuppala.quotingbackend.beans.product.dto.productDTO;
import dev.abhinavvuppala.quotingbackend.beans.product.dto.productMetadataDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class  ProductController {
    private final ProductService productService;
    private final PartnerService partnerService;
    @Autowired
    public ProductController(ProductService service, PartnerService partnerService) {
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
        PartnerEntity partner = partnerService.getPartnerById(productRequest.getEntity().getSeller().getId());
        ProductEntity productEntity = ProductEntity.fromDTO(productRequest,partner);
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
