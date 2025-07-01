package dev.abhinavvuppala.quotingbackend.beans.quoteRevision;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface revisionRepository extends JpaRepository<quoteRevisionEntity,Integer> {
}
