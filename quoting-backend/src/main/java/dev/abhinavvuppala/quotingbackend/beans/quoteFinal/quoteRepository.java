package dev.abhinavvuppala.quotingbackend.beans.quoteFinal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface quoteRepository extends JpaRepository<quoteFinalEntity,Integer> {
}
