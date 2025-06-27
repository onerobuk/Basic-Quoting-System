package dev.abhinavvuppala.quotingbackend.beans.product;

import dev.abhinavvuppala.quotingbackend.beans.partner.PartnerEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private int productId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_price")
    private double productPrice;

    @Column(name = "currency",length = 3,columnDefinition = "CHAR(3)")
    private String productCurrency;

    @ManyToOne
    @JoinColumn(name = "seller_id",referencedColumnName = "partner_id")
    private PartnerEntity partnerEntity;

    @Column(name = "created_at")
    private OffsetDateTime createdAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    public ProductEntity(String productName, double productPrice, String productCurrency, PartnerEntity partnerEntity, String createdBy){
        this.productName=productName;
        this.productPrice=productPrice;
        this.productCurrency=productCurrency;
        this.partnerEntity = partnerEntity;
        this.createdBy=createdBy;
        this.updatedBy=createdBy;
    }

}
