package dev.abhinavvuppala.quotingbackend.beans.quoteLine;

import dev.abhinavvuppala.quotingbackend.beans.product.productEntity;
import dev.abhinavvuppala.quotingbackend.beans.quoteLine.dto.quotelineDTO;
import dev.abhinavvuppala.quotingbackend.beans.quoteRevision.quoteRevisionEntity;
import dev.abhinavvuppala.quotingbackend.util.Currency;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Entity
@Table(name = "quote_line_revision")
@Data
@NoArgsConstructor
public class quotelineEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quote_line_id")
    private int quoteLineId;

    @JoinColumn(name = "revision_id",referencedColumnName = "revision_id")
    @ManyToOne
    private quoteRevisionEntity quoteRevision;

    @OneToOne
    @JoinColumn(name = "product_id",referencedColumnName = "product_id")
    private productEntity product;

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

    public static quotelineEntity fromDTO(quotelineDTO dto,String username, quoteRevisionEntity revision, productEntity product){
        quotelineEntity entity = new quotelineEntity();
        entity.quoteRevision = revision;
        entity.product = product;
        entity.quantity = dto.getQuantity();
        entity.price = Currency.valueOf(product.getProductCurrency()).getUSDrate() * dto.getQuantity();
        entity.currencyCode = dto.getCurrencyCode();
        entity.createdBy=entity.updatedBy=username;
        return entity;
    }
}
