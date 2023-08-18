import {Injectable} from '@angular/core';
import JSEncrypt from 'jsencrypt';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu22VNCP8pAepX/z0OwJM
  TSqXKIQne5f7VNgAxyaJH5b55VSnWOnXmISozmj3+89JAeU8vxrTJGNEihom4+CA
  jRi0JWG0SN7PyA19CmWFMscIFrFulPSIUUNCMKKJa4/u8MIdWya058346oDa513D
  1WEDr1oOZhAm7nAD3JwiHpf7H8Bp8PvKMhwhHo9/RssQwegNRg6CH8be6Wb5DxvN
  XCTpuXszlOfvtL5bowWjirZKsSD54BWlFSVM4Ro/AVzH9zXv6AmzGDotN/pv4J1Z
  zOa0gXBdZHtgQnoNf/X40A0KVovdOGylmVGRJdt1YG5GPEqSQun+oiDLoXez+tSJ
  zQIDAQAB
  -----END PUBLIC KEY-----
  `
  privateKey = `-----BEGIN PRIVATE KEY-----
  MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7bZU0I/ykB6lf
  /PQ7AkxNKpcohCd7l/tU2ADHJokflvnlVKdY6deYhKjOaPf7z0kB5Ty/GtMkY0SK
  Gibj4ICNGLQlYbRI3s/IDX0KZYUyxwgWsW6U9IhRQ0Iwoolrj+7wwh1bJrTnzfjq
  gNrnXcPVYQOvWg5mECbucAPcnCIel/sfwGnw+8oyHCEej39GyxDB6A1GDoIfxt7p
  ZvkPG81cJOm5ezOU5++0vlujBaOKtkqxIPngFaUVJUzhGj8BXMf3Ne/oCbMYOi03
  +m/gnVnM5rSBcF1ke2BCeg1/9fjQDQpWi904bKWZUZEl23VgbkY8SpJC6f6iIMuh
  d7P61InNAgMBAAECggEAZnGeBNLKqylY5ZNQNtSpud/WoRmirwZCJHyv6Cpi9rZB
  vpyHn6yo379auP9c0/DXmcafbmEOGSx88PMcYJ98BCMFjA0cSlwmu9TLjJwysq9g
  925h397Mh4Y4rnaYoAca9dNT0leUt8K4FAz8GUwB1yZgqj6R8i1P6jGlmrZoW8mM
  iE8lhHep4oV9f2eme74WVdQGfQNPGr4O54kauB8WPx/NNGEky0ObKxuf34WgAtNk
  8RQ7gb72SUS9sKxRi523ULdoV4cCubepKcu9k5LKNFzoov6gOBC6A17ynFA8I8fs
  vdfVnpBoXGFqqFn1lFFHpocKbxUefvQ50evk1NeWYQKBgQDl3S2ErbxAg2kdQmWl
  5kaO8TJIlxShUV0VnL10VPC2Q+B58W2PU65hBaRerX6kHFlw/iwVd00QOwBDBf/M
  38esKrtoB6dNFXtplok/MUKaIPme6ieDi2BzRY7hSfp2U3/GLzSaMUXg3CP/EVXL
  GDkK8OhMOvGPPBG2BUEqPt9KGQKBgQDQvTDsZdYvxOa2uh2kuZFgrUgSeXakuV19
  ThAXqvRZ9uY4ViPx75fN4kI5T7xi9Y9fJvIHhVwPNUzJ1yTdM+PqRsujO/zQcpoJ
  1gVNP3TzLSakt6+C0YQNZbXPD0NWYJf7gnpZOs6kzVhmc5jBHRYJZ7VPit1NZswJ
  RFNcuf1b1QKBgQC5S6iL0fl1D/nGKmYCbDTouapNNezddddRur5Gbsp0QxdLdcFZ
  zp09fOzZnYX/CRNYsKwcycUHlmhJnyZrouE0+mWEINdOnkiT/1O36x/DW12eKyeb
  NNmVUrcxCQ+sHvdbbWY7/ghUkWE7FmBQjcA9/6FjAgkD6+pjDq1PPsuE0QKBgDi/
  hoJuOSmpdTOuK4rx7CUFVve2z9t+jX0YcOWOU3n11qbwPDt08KdHYMul8shQjBbJ
  Rrlmtx1nVyX0eJAuoEK71nbdQyEEVv5fkfdrTgciekQDsBJ3lVfzE9dkBeGAxzDY
  SxzhEPba4LKRsLCnkKsj57XlQb7eOJA4ZBVsdwW1AoGAdRdWtltJNsQC50SAxLS3
  oBp05uQ89LrWdleXEj+1vX5NXHdk2pfNAykyk8SCJAIWk2qOzmiETIS1fPk2GLAu
  V/xV1cuTdVLIbRiWxe+IlWOm2D9nIC+5jzIZSaGIWZ6QiDUZcl+Tm3PH8u562Enm
  qk9cHPxf7etQmscul/WeXAM=
  -----END PRIVATE KEY-----
  `
  constructor() {
  }
  encrypt(data:string, key:string){
    let jsencrypt = new JSEncrypt()
    jsencrypt.setPublicKey(key)
    return jsencrypt.encrypt(data)
  }
  decrypt(data:string, key:string){
    let jsencrypt = new JSEncrypt()
    jsencrypt.setPrivateKey(key)
    return jsencrypt.decrypt(data)
  }
  
}