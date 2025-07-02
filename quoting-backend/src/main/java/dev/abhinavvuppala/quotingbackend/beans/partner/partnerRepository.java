package dev.abhinavvuppala.quotingbackend.beans.partner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface partnerRepository extends JpaRepository<partnerEntity,Integer> {
}
