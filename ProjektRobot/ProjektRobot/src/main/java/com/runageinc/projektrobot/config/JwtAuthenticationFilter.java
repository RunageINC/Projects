package com.runageinc.projektrobot.config;

import com.runageinc.projektrobot.security.JwtKeyConfigurationSettings;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.FilterChain;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Objects;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtKeyConfigurationSettings jwtKeyConfigurationSettings;

    @Override
    protected void doFilterInternal(final HttpServletRequest request,
                                    final HttpServletResponse response,
                                    final FilterChain filterChain) throws ServletException, IOException {
        final var authHeader = request.getHeader("Authorization");

        if (Objects.isNull(authHeader) || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwtToken = authHeader.substring(7);

        try {
            final var claims = Jwts.parserBuilder().setSigningKey(jwtKeyConfigurationSettings.getJwtKeyConfiguration()).build().parseClaimsJws(jwtToken).getBody();

            final var username = claims.getSubject();

            if (Objects.nonNull(username) && Objects.isNull(SecurityContextHolder.getContext().getAuthentication())) {
                final var authToken = new UsernamePasswordAuthenticationToken(username, null, null);

                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        } catch (Exception e) {
            log.error("Invalid JWT Token");
        }

        filterChain.doFilter(request, response);
    }
}