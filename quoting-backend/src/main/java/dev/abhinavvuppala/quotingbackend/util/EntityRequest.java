package dev.abhinavvuppala.quotingbackend.util;

import lombok.Data;

@Data
public class EntityRequest<T> {
    private T entity;
    private String username;
}
