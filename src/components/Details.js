import React from 'react'
import './Details.css'
import Rating from '@material-ui/lab/Rating';
import {Table} from 'react-bootstrap'
import data from '../data'
import {TransformWrapper,TransformComponent} from 'react-zoom-pan-pinch';


export default function Details({product}) {
  console.log(product)
    
    return (
        <>
        <div className="row orta">
            <div className="col-lg-5 sol">
              <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                <TransformComponent>
              <img src={product.image}/>
              </TransformComponent>
              </TransformWrapper>
    
              <span className="ucresim"><img src={product.image}/><img src={product.image}/><img src={product.image}/><img src={product.image}/></span>
            </div>
            <div className="col-lg-7 sag">
                <span><strong>Marka</strong>:{product.brand}</span>
                <span><Rating size="small" name="half-rating" defaultValue={5} precision={0.5} /></span>
                <span><strong>Fiyat</strong>:{product.price} TL ({product.miktarbir} gr) /
                {product.priceiki} TL ({product.miktariki} gr)</span>
                <span className="borderr"><strong><i class="fas fa-circle kirmizi"></i> {product.aromabir}</strong> <strong><i class="fas fa-circle kahve"></i>  {product.aromaiki}</strong></span>
                <span><strong>Stok</strong>:{product.stock>0 ? <span className="yesil">Stokta Mevcut ({product.stock})</span> : <span className="nonen">Stokta yok</span>}</span>
                <span><strong>Tür</strong>:{product.sort}</span>
                <span><strong>Değer</strong>:{product.protein} gr Protein---{product.services} Servis</span>
                <span className="sonyazi"><strong>Ürün Açıklaması</strong>:{product.description}</span>
                <span><button><i class="fas fa-shopping-basket"></i> Sepete Ekle</button><button><i class="fas fa-forward"></i> Alısverişe Devam Et</button></span>
            </div>
            <div className="col-lg-6"></div>
        </div>
          <div className="row mt-4">
              <div className="col-lg-7 m-auto">
              <Table striped bordered hover variant="black">
  <thead>
    <tr>
      <th>Eneji</th>
      <th>Protein</th>
      <th>Karbonhidrat</th>
      <th>Yag</th>
      <th>Lif</th>
      <th>Tuz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{product.besindeger.energy} kcal</td>
      <td>{product.besindeger.protein} gr</td>
      <td>{product.besindeger.karbonhidrat} gr</td>
      <td>{product.besindeger.yag} gr</td>
      <td>{product.besindeger.lif} gr</td>
      <td>{product.besindeger.tuz} gr</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
              </div>
          </div>
        </>
    )
}
