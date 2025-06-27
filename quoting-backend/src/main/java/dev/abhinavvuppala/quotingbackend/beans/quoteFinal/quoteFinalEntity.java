package dev.abhinavvuppala.quotingbackend.beans.quoteFinal;

import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.quoteRevisionEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;

@Entity
@Table(name = "quote_final")
@Data
@NoArgsConstructor
public class quoteFinalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quote_id")
    private int quoteId;

    @JoinColumn(name = "buyer_id")
    @OneToOne
    private PartnerEntity buyer;

    @OneToOne
    @JoinColumn(name = "current_revision",referencedColumnName = "revision_id")
    private quoteRevisionEntity currentRevision;

    @OneToMany(mappedBy = "quoteEntity",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<quoteRevisionEntity> quoteRevisionList;

    @Column(name = "status",length = 50)
    private String status;

    @Column(name = "total_cost")
    private double totalCost;

    @Column(name = "expiration_date")
    private OffsetDateTime expirationDate = OffsetDateTime.now(ZoneOffset.UTC).plusWeeks(1);

    @Column(name = "created_at")
    private OffsetDateTime createdAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;
}
