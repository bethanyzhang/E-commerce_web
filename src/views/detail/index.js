import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFeaturedProduct, useProduct } from '../../hooks'
import { LoadingOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import Select from 'react-select'
import { MessageDisplay, ProductShowcase } from '../../components'
import "../../styles/productDetails/productDetails.css"
import { useBasket } from '../../hooks/index'

export default function Detail () {
  const { itemInBasket, addtoBasket, removefromBasket } = useBasket()

  const { name } = useParams()
  const { product, isLoading, error, getData } = useProduct(name)

  const [selectedImage, setSelectedImage] = useState("")
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const { featuredProducts, getFeaturedProducts, error: errorFeatured } = useFeaturedProduct()
  useEffect(() => {
    setSelectedImage(product.image)
  }, [product])

  const onChangeSize = (newValue) => {
    setSelectedSize(newValue.value)
  }

  return (
    <div className='productDetails'>
      <main className='mainContainer'>
        {
          isLoading && (
            <>
              <h4>Loading Product...</h4>
              <LoadingOutlined style={{ fontSize: '3rem' }}></LoadingOutlined>
            </>
          )
        }
        {
          error && (
            <MessageDisplay message={error} action={getData}></MessageDisplay>
          )
        }
        {
          (product && !isLoading) && (
            <div className='header'>
              <Link to="/shop">
                <h3 className='backtoshop'>
                  <ArrowLeftOutlined className='arrow' /> &nbsp;
                  Back to shop</h3>
              </Link>



              <div className='productmodal'>
                <div className='side'>
                  {
                    product.imageCollection.length !== 0 && (
                      <div className='imgslider'>
                        {
                          product.imageCollection.map((img) => (
                            <div className='imagedetail' key={img.id} onClick={() => setSelectedImage(img.url)}>
                              <img src={img.url} alt="" />
                            </div>
                          ))
                        }
                      </div>
                    )
                  }
                </div>
                <div className='mid'>
                  <img src={selectedImage} alt="" />
                </div>
                <div className='right'>
                  <span>{product.brand}</span>
                  <h2>{product.name}</h2>
                  <span>{product.description}</span>
                  <hr />
                  <div>
                    <span className='widthsize'>Lens Width and Frame Size</span>
                    <Select className='selecter' placeholder="--Select Size--"
                      onChange={onChangeSize}
                      options={product.sizes.map((size) => ({ label: `${size} mm`, value: size }))}
                    ></Select>
                  </div>

                  <br />
                  {
                    product.availableColors.length >= 1 && (
                      <div>
                        <span>Choose Color</span>
                        <br />
                        <div className='colorpics'>
                          {
                            product.availableColors.map((color) => (<div onClick={() => setSelectedColor(color)} className='color' style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: color }}></div>))
                          }
                        </div></div>
                    )
                  }
                  <h3>{product.price}</h3>
                  <div>
                    <button onClick={addtoBasket}>
                      Add to Basket
                    </button>
                  </div>
                </div></div>
              <div className='rec'>
                <h1>Recommended</h1>
                <Link to="/recommended">See All</Link>
              </div>
              <div className='recpro'>
                {
                  errorFeatured ? (
                    <MessageDisplay message={errorFeatured} action={getFeaturedProducts} />
                  ) : (
                    <div className='pro'>
                      <ProductShowcase products={featuredProducts}></ProductShowcase></div>
                  )
                }</div>
            </div>
          )
        }
      </main>
    </div>
  )
}
