package dev.abhinavvuppala.quotingbackend.util;

import lombok.Getter;

@Getter
public enum Currency {
    // 1 USD = x Currency
    // 1/x USD = 1 Currency
    USD(1.00),
    GBP(1.37),
    EUR(1.17),
    CAD(0.73),
    AUD(0.65),
    INR(0.012),
    RUB(0.013),
    JPY(0.0069),
    HKD(0.13),
    CNY(0.14);

    @Getter
    private final double USDrate;

    Currency(double usDrate) {
        USDrate = usDrate;
    }
}
