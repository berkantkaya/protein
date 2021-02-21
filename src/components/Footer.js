import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-3 ayak">
                  <h2>Supplementler</h2>
                  <span>Biz Kimiz</span>
                  <span>Kariyer</span>
                  <span>İletişim</span>
                  <span>Supplementlerde Satış Yap</span>
                  <span>Güvenli Alışveriş</span>
                  <span><i class="far fa-credit-card"></i></span>
                </div>
                <div className="col-lg-3 ayak">
                <h2>About Us</h2>
                  <span>Who we are ?</span>
                  <span>Careers</span>
                  <span>Contact Us</span>
                  <span>Mobil Uygulamalar</span>
                  <span>App Store</span>
                  <span>Google Play</span>
                </div>
                <div className="col-lg-3 ayak">
                <h2>Kampanyalar</h2>
                  <span>Aktif Kampanyalar</span>
                  <span>Elite Üyelik</span>
                  <span>Sevgililer Günü Hediyesi</span>
                  <span>Fırsatlar</span>
                  <span>Sosyal Medya</span>
                  <span><i class="fab fa-facebook"></i><i class="fab fa-twitter-square"></i><i class="fab fa-instagram-square"></i><i class="fab fa-twitch"></i></span>
                </div>
                <div className="col-lg-3 ayak">
                <h2>Yardım</h2>
                  <span>Sıkça Sorulan Sorular</span>
                  <span>Canlı Yardım</span>
                  <span>Nasıl İade Edebilirim</span>
                  <span>İşlem Rehberi</span>
                  <span>DSM Group</span>
                  <span>Güncellik</span>
                </div>
                
            </div>
        </div>
    )
}
