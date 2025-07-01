package dev.abhinavvuppala.quotingbackend.beans.partner;


import dev.abhinavvuppala.quotingbackend.beans.partner.dto.partnerDTO;
import dev.abhinavvuppala.quotingbackend.beans.product.productEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="partner")
@Data
@NoArgsConstructor
public class PartnerEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="partner_id")
    private int partnerId;

    @Column(name = "partner_name")
    private String partnerName;

    @Column(name = "partner_email")
    private String partnerEmail;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "billing_address")
    private String billingAddress;

    @Column(name = "is_seller")
    private boolean isSeller;

    @Column(name = "created_at")
    private OffsetDateTime createdAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt = OffsetDateTime.now(ZoneOffset.UTC);

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    @OneToMany(mappedBy ="partnerEntity", cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<productEntity> productList;

    public PartnerEntity(String partnerName, String partnerEmail, String shippingAddress, String billingAddress, boolean isSeller, String createdBy) {
        this.partnerName = partnerName;
        this.partnerEmail = partnerEmail;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
        this.isSeller = isSeller;
        this.createdBy = createdBy;
        this.updatedBy = createdBy;
    }

    public PartnerEntity(partnerDTO partnerDTO,String createdBy) {
        this.partnerName = partnerDTO.getPartnerName();
        this.partnerEmail = partnerDTO.getPartnerEmail();
        this.shippingAddress = partnerDTO.getShippingAddress();
        this.billingAddress = partnerDTO.getBillingAddress();
        this.isSeller = partnerDTO.isSeller();
        this.updatedBy=this.createdBy=createdBy;
        this.productList=new ArrayList<>();
    }
}
