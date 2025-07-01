package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface quotelineRepository extends JpaRepository<quotelineEntity,Integer> {
}
