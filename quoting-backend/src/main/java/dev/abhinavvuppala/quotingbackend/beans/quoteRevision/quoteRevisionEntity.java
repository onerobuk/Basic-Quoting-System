package dev.abhinavvuppala.quotingbackend.beans.quoteRevision;

import dev.abhinavvuppala.quotingbackend.beans.quoteFinal.quoteFinalEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.quoteLineEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;

@Entity
@Table(name = "quote_revision")
@Data
@NoArgsConstructor
public class quoteRevisionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revision_id")
    private int revisionId;

    @ManyToOne
    @JoinColumn(name = "quote_id",referencedColumnName = "quote_id")
    private quoteFinalEntity quoteEntity;

    @Column(name = "revision_no")
    private int revisionNumber = 1;

    @Column(name = "notes",length = 100)
    private String notes;

    @OneToMany(mappedBy ="quoteRevision", cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<quoteLineEntity> quoteLines;

    @Column(name = "created_at")
    private OffsetDateTime createdAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;
}
