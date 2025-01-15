package com.runageinc.projektrobot.security;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;

@Getter
@Component
public class JwtKeyConfigurationSettings {

    private final Key jwtKeyConfiguration;

    public JwtKeyConfigurationSettings(@Value("${jwt.key}") final String JWT_SECRET_KEY) {
        final String JWT_ALGORITHM = "HmacSHA512";
        jwtKeyConfiguration = new SecretKeySpec(JWT_SECRET_KEY.getBytes(), JWT_ALGORITHM);
    }
}
