package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import dev.abhinavvuppala.quotingbackend.beans.product.productService;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto.quotelineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quoteline")
public class quotelineController {
    private final quotelineService quotelineService;
    private final productService productService;

    @Autowired
    public quotelineController(productService productService, quotelineService quotelineService) {
        this.productService = productService;
        this.quotelineService = quotelineService;
    }

    public ResponseEntity<quotelineDTO> getQuoteline(@PathVariable int id){
        return ResponseEntity.ok(new quotelineDTO(quotelineService.getQuotelineById(id)));
    }
}
