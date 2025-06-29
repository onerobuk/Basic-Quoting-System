package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import dev.abhinavvuppala.quotingbackend.beans.product.ProductService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class quotelineController {
    private final quotelineService quotelineService;
    private final ProductService productService;

    public quotelineController(ProductService productService, quotelineService quotelineService) {
        this.productService = productService;
        this.quotelineService = quotelineService;
    }
}
