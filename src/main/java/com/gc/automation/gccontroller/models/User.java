package com.gc.automation.gccontroller.models;

import javax.persistence.*;
import java.awt.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String encryptPasswd;
    @Column(name = "email")
    private String email;
    @Lob
    @Column(name = "photo")
    private byte[] photo;
    @Column(name = "role")
    private String role;
    @Column(name = "password_cipher")
    private String passwdCipher;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEncryptPasswd() {
        return encryptPasswd;
    }

    public void setEncryptPasswd(String encryptPasswd) {
        this.encryptPasswd = encryptPasswd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPasswdCipher() {
        return passwdCipher;
    }

    public void setPasswdCipher(String passwdCipher) {
        this.passwdCipher = passwdCipher;
    }

    @Override
    public String toString() {
        return "User[username=" + username + ",encryptedPasswd=" + encryptPasswd + ", passwdCipher=" + passwdCipher + ",role=" + role + "]";
    }
}
