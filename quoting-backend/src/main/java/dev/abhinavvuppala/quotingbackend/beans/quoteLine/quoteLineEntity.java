package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import dev.abhinavvuppala.quotingbackend.beans.product.ProductEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto.quotelineDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.quoteRevisionEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Entity
@Table(name = "quote_line_revision")
@Data
@NoArgsConstructor
public class quoteLineEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quote_line_id")
    private int quoteLineId;

    @JoinColumn(name = "revision_id",referencedColumnName = "revision_id")
    @ManyToOne
    private quoteRevisionEntity quoteRevision;

    @OneToOne
    @JoinColumn(name = "product_id",referencedColumnName = "product_id")
    private ProductEntity product;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "unit_price")
    private double price;

    @Column(name = "local_currency",length = 3,columnDefinition = "CHAR(3)")
    private String currencyCode;

    @Column(name = "created_at")
    private OffsetDateTime createdAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    public static quoteLineEntity fromDTO(quotelineRequest request,quoteRevisionEntity revision,ProductEntity product){
        quotelineDTO DTO = request.getEntity();
        quoteLineEntity entity = new quoteLineEntity();
        entity.quoteRevision = revision;
        entity.product = product;
        entity.quantity = DTO.getQuantity();
        entity.price = DTO.getPrice();
        entity.currencyCode = DTO.getCurrencyCode();
        entity.createdBy=entity.updatedBy=request.getUsername();
        return entity;
    }
}
