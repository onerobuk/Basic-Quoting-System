package dev.abhinavvuppala.quotingbackend.beans;

import dev.abhinavvuppala.quotingbackend.beans.partner.partnerService;
import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.dto.quoteDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteService;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.revisionRequest;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.revisionService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quotes")
public class quoteController {
    private final quoteService quoteService;
    private final revisionService revisionService;

    @Autowired
    public quoteController(quoteService quoteService, revisionService revisionService) {
        this.quoteService = quoteService;
        this.revisionService = revisionService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<quoteDTO> getQuoteById(@PathVariable int id){
        return ResponseEntity.ok(new quoteDTO(quoteService.getQuoteById(id)));
    }

    @PostMapping
    public ResponseEntity<Void> createQuote(@RequestBody revisionRequest request){
        quoteService.createQuote(request);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }



    @PutMapping("/{id}")
    public ResponseEntity<Void> addRevision(@RequestBody revisionRequest request,@PathVariable int id){
        quoteFinalEntity quote = quoteService.getQuoteById(id);
        revisionService.createRevision(request,quote);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuote(@PathVariable int id){
        quoteService.deleteQuoteById(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }
}
