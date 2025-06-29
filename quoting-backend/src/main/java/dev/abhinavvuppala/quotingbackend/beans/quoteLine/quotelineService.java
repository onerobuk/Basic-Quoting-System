package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto.quotelineDTO;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class quotelineService {

    private final quotelineRepository worker;


    public quotelineService(quotelineRepository worker){
        this.worker=worker;
    }

    @Transactional
    public void createQuoteline(quotelineRequest request){
        quotelineDTO quotelineDTO = request.getEntity();


    }
}
