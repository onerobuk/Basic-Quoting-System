package dev.abhinavvuppala.quotingbackend.beans.quoteFinal;

import lombok.Getter;

@Getter
public enum Statuses {
    CREATED("Quote has been created."),
    SUBMITTED("Order has been submitted"),
    SHIPPED("Order has shipped."),
    FILLED("Order filled and closed");

    private final String statusMessage;

    Statuses(String statusMessage) {
        this.statusMessage = statusMessage;
    }
}
